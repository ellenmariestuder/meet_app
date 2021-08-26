const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

// Establish credentials
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://ellenmariestuder.github.io/meet_app/"],
  javascript_origins: ["https://ellenmariestuder.github.io", "http://localhost:3000"],
};
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// ----------- Functions ----------- //

// Generate user login url
module.exports.getAuthURL = async () => {

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      authUrl: authUrl
    }),
  };
};

// Get access token
module.exports.getAccessToken = async (event) => {

  // instantiate the OAuthClient
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // decode authorization code extracted from URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    // exhange auth code for access token, w 'callback' after exchange
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
    .then((token) => {
      // repsond with OAuth token
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(token),
      };
    })
    .catch((err) => {
      // handle error
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    });
};

// get calendar events
module.exports.getCalendarEvents = async (event) => {

  // instantiate the OAuthClient
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // decode authorization access_token extracted from URL query
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);

  // set access token as credentials in oAuth2Client
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    // get list of events from 'fullstackwebdev' google calendar
    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );
  })
    .then((results) => {
      // repsond with formatted events list
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ events: results.data.items }),
      };
    })
    .catch((err) => {
      // handle error
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    });
};
