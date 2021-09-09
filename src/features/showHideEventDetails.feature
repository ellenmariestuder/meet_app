Feature: Show / Hide Event Details 

# ----------------------------------------------------
Scenario: An event element is collapsed by default
Given the main page is open
When user is viewing a list of events
Then event elements are collapsed

# ----------------------------------------------------
Scenario: User can expand an event to see its details
Given user is viewing a list of events
When user clicks on an event element
Then the element expands to show event details

# ----------------------------------------------------
Scenario: User can collapse an event to hide its details
Given user is viewing expanded event element showing event details
When user clicks a button to collapse event details
Then event details are hidden and a list of events (with details hidden) is shown