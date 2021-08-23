# Meet App  

Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Key Features:   
1. Filter events by city  
2. Show/ hide event details  
3. Specify number of events  
4. Use the app while offline  
5. Add an app shortcut to the home screen  
6. View a visualization of number of upcoming events by city   
&nbsp;    

---

## User Stories: 
&nbsp;   

**FEATURE 1: FILTER EVENTS BY CITY**  

    As a user I should be able to filter events by city so that I can view only the events in the city(/ies) I am interested in. 

*Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities*  
**Given** user hasn’t searched for any city  
**When** user opens the app  
**Then** user should see a list of all upcoming events  
&nbsp;   

*Scenario 2: User should see a list of suggestions when they search for a city*  
**Given** the main page is open  
**When** user starts typing in the city textbox  
**Then** user should see a list of cities (suggestions) that match what they’ve typed  
 &nbsp;   

*Scenario 3: User can select a city from from the suggested*  
**Given** user was typing “Berlin” in the city textbox, and list of suggested cities is showing  
**When** user selects a city (e.g., “Berlin, Germany”) from the list  
**Then** their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city  
 &nbsp;   

---

**FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS**

    As a user I should be able to expand the event details for events I am interested in so that I can read more about the event.

*Scenario 1: An event element is collapsed by default*  
**Given** the main page is open  
**When** user is viewing a list of events  
**Then** event elements are collapsed  
 &nbsp;   

*Scenario 2: User can expand an event to see its details*  
**Given** user is viewing a list of events  
**When** user clicks on an event element  
**Then** the element expands to show event details  
 &nbsp;   

*Scenario 3: User can collapse an event to hide its details*  
**Given** user is viewing expanded event element showing event details  
**When** user clicks a button to collapse event details  
**Then** event details are hidden and a list of events (with details hidden) is shown  
 &nbsp;   

---

**FEATURE 3: SPECIFY NUMBER OF EVENTS**

    As a user I should be able to change the number of events I see at a time so that I can customize my experience using the app to my preferences.

*Scenario 1: When user hasn’t specified a number, 32 is the default number*  
**Given** user is viewing a list of events  
**When** user does not specify a number of events to view  
**Then** (up to) 32 events are displayed for user to view  
 &nbsp;   

*Scenario 2: User can change the number of events they want to see*   
**Given** user is viewing a list of events  
**When** user enters desired number of events to view into specified text box   
**Then** the number of events shown is less than or equal to the user-specified number  
 &nbsp;    
   
---

**FEATURE 4: USE THE APP WHEN OFFLINE**

    As a user I should be able to view previously viewed events on the app when I don’t have an internet connection so that I can access event information even if I’m offline.

*Scenario 1: Show cached data when there’s no internet connection*  
**Given** user is using the app, and user has no internet connection  
**When** app is entered/ loaded  
**Then** cached data (results of users last search when connected to internet) is displayed  
 &nbsp;   
    
*Scenario 2: Show error when user changes the settings (city, time range)*  
**Given** user is not connected to internet  
**When** user changes the search settings  
**Then** an error message is displayed  
 &nbsp;   

---

**FEATURE 5: DATA VISUALIZATION**

    As a user I should be able to view a visual representation of the number of upcoming events in each city so that I can learn about where there are more/ fewer events going on.

*Scenario 1: Show a chart with the number of upcoming events in each city*   
**Given** main page is loaded  
**When** user views the main page  
**Then** visual(s) depicting the number of events happening in different cities is displayed  
 &nbsp;   


