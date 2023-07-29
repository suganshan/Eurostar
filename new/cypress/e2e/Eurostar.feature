Feature: Railway ticket booking system

    Scenario Outline: Booking a ticket

        Given I open the Eurostar webpage
        And Click Trains 
        And Click Return Enter from as london st pancras
        And Enter to Paris Gare Du Nord
        And Select two dates from and to
        And Select passangers 2 adults
        When Click on search button
        And Select Outbound price
        And Select Return price
        And Click on continue
        And Click on check out as a guest
        Then Verify the Screenshot of the Check Out Screen

        Examples:
            | username | password |
            | Admin    | admin123 |