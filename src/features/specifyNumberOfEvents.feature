Feature: Specify Number of Events

# ----------------------------------------------------
Scenario: When user hasn’t specified a number, 32 is the default number
Given user is viewing a list of events
When user does not specify a number of events to view
Then 32 events are displayed for user to view

# ----------------------------------------------------
Scenario: User can change the number of events they want to see
Given user is viewing a list of events
When user enters desired number of events to view into specified text box
Then the number of events shown is equal to the user-specified number
