Feature: Filter events by city

# ----------------------------------------------------
Scenario: When user hasn't searched for a city, show upcoming events from all cities.
Given user hasn't searched for any city
When user opens the app
Then user should see list of all upcoming events

# ----------------------------------------------------
Scenario: User should see list of suggestions when they search for a city
Given the main page is open
When user starts typing in the city textbox
Then user should receive list of suggested citiesthat match what they've typed

# ----------------------------------------------------
Scenario: User can select city from suggested list
Given user is typing 'Berlin' into text box
And list of suggested cities is showing
When user selects a city (i.e., 'Berlin, Germany') from the list
Then the selected city should be changed to that city (i.e., 'Berlin, Germany')
And user should receive list of upcoming events in that city