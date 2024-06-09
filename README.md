### README

## Available Scripts

In the project directory, you can run:

Use `yarn` or `npm` whichever you are comfortable with.

### `yarn install`

Install the dependencies

### `yarn start`

As you noticed, when starting up the application there is some compile errors. This is expected and part of the project to debug the issue.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Requirements

This is an automation engineer-focused take-home assignment. Please review the features that were implemented as part of this take-home assignment for our UI Engineers. It shouldn't take you longer than 3 hours. Please install and run the app and review the existing features:

- The home page displays `Upkeep Candidate UI Project`
- There is a Work Orders List Page
- There is a Work Orders Details Page
- It has the ability to edit the Work Order
- Visiting a URL for a non-existing Work Order ID will show a relevant error: `This work order ID does not exist`

Here are some additional details relevant to the team, and our customers:

- We have analyzed our browser audit and recognized that users are heavily using our application on Chrome and Firefox.
- We work in two week sprints and release weekly.
- We have an integration environment that reflects our development branches, a staging environment, and a production environment.
- Our usage weans after 3:30 PM PST daily. Thus, we'll release on Thursdays at 4PM.

In addition, you are sitting in your theoretical team's sprint planning. The following ticket will be executed this sprint:

```
Ticket: Work Order Delete

Description: Add a button next to the Edit button on the bottom right on the work order detail for delete that will showcase some modal, once yes is selected, the user is redirected to the WorkOrder list page and see the list view without that item.

Test Case:

### To be added by QA Engineer

Functional E2E test cases :

1. To verify valid work order has delete option.
2. To verify modal details of delete.
3. To verify list view after delete work order.
4. To verify redirection works well after deletion.
5. To verify valid work order list (e.g. Open, Complete)
6. To verify invalid order can not be deleted. (e.g In Progress)
7. To verify duplicate work order can be deleted.
8. To verify design of mobile view of work order delete option.
9. To verify unauthentic user try to delete work order.
10. To verify expire token user try to delete work order.
11. To verify user try to delete order which is already deleted from database.
12. To verify two user try to delete same work order.
13. To verify soft delete is happening on database side for work order delete.
14. To verify only permissible user can delete the work order.
15. To verify communication (notification) for delete work order with details.



Component test cases are added below. Please check.
```

In your manual QA, you notice that the save on the work order edit does not preserve.

## Checklist

Here is your completion checklist:

- [x] Add Cypress into this project and build out the test cases for the above already implemented use cases in vanilla Javascript.
- [x] Available browsers should reflect our user needs.
- [x] Add a test for loading home page.
- [x] Add a test for Work Order List Page
- [x] Add a test for Work Order Detail Page
- [x] Add a test for Work Order Edit. Test that you can edit all the expected fields implemented.

- [x] Write out the test case that showcases the failure you discovered.
```
1. TC_11 :: Verify user save edit for the in progress order (UpdatedAt date is not changing.)
2. TC_12 :: Verify user revisit same work order and data is stored (Data is not store after refresh.)
3. TC_13 :: Verify user can not save data with none priority.

Suggestion:
Found some data are duplicate. Need to improve the test input file.

```

- [x] Say you were listening in the sprint planning, write out the test cases you would included in the Work Order Delete Ticket Below or above:

```
Component based Test cases:

1. Verify Button Existence: 
   - Verify that a "Delete" button exists next to the "Edit" button at the bottom right corner of the Work Order detail page.

2. Click Delete Button:
   - Click on the "Delete" button.

3. Verify Modal Display:
   - Verify that a modal dialog appears upon clicking the "Delete" button.

4. Verify Modal Content:
   - Verify that the modal contains a message confirming the deletion action.
   - Verify that the modal contains "Yes" and "Cancel" buttons for confirming or canceling the deletion action.

5. Confirm Deletion:
   - Click on the "Yes" button in the modal to confirm the deletion action.

6. Verify Redirection:
   - Verify that upon confirming the deletion, the user is redirected to the Work Order list page.

7. Verify Work Order Removal:
   - Verify that the deleted Work Order item is no longer visible in the Work Order list view.

8. Verify Work Order Preservation:
   - Verify that the deletion action does not affect other Work Order items and they remain intact in the list view.

9. Verify Delete Button Absence:
   - Verify that the "Delete" button is no longer visible on the Work Order detail page after the item is deleted.

10. Verify Cancel Functionality:
    - Click on the "Cancel" button in the modal to cancel the deletion action.
    - Verify that the modal is closed without performing any deletion action.

11. Verify No Changes on Cancel:
    - Verify that canceling the deletion action does not cause any changes to the Work Order list view.

12. Verify Modal Closure:
    - Verify that clicking outside the modal or pressing the "Esc" key closes the modal without performing any deletion action.

13. Verify Consistent UI Behavior for different devices:
    - Repeat the above steps with different Work Order items to ensure consistent behavior across different scenarios.

```

- [x] Write out the test case for what you would anticipate to be proven true should that engineer implement the delete feature as well.

```

1. Verify Button Existence: 
   - Verify that a "Delete" button exists next to the "Edit" button at the bottom right corner of the Work Order detail page.

2. Verify Modal Display on click Delete button:
   - Verify that a modal dialog appears upon clicking the "Delete" button.

3. Verify Modal Content:
   - Verify that the modal contains a message confirming the deletion action.
   - Verify that the modal contains "Yes" and "Cancel" buttons for confirming or canceling the deletion action.

4. Confirm Deletion operation:
   - Click on the "Yes" button in the modal to confirm the deletion action.

5. Verify Redirection:
   - Verify that upon confirming the deletion, the user is redirected to the Work Order list page.

6. Verify Work Order Removal from view:
   - Verify that the deleted Work Order item is no longer visible in the Work Order list view.

7. Verify No Changes on Cancel and model closed:
    - Verify that canceling the deletion action does not cause any changes to the Work Order list view.

```

- [x] Answer the following: The todo item before (writing tests before feature implementation) showcases a development paradigm used by some engineering teams. What is the name of it? What is the benefit of it? What are the drawbacks?

```
It is call TDD (Test Driven Development).

Benefits:

1. Better Code Quality: TDD encourages super developers to write code that is more modular, maintainable, and focused on fulfilling given requirements.
2. Faster Feedback and collaboration: With TDD, you can get feedback from the tests immediately, without waiting for manual testing or user acceptance testing.
3. Seamless maintenance and optimization: TDD promotes a design-centric approach, as developers must consider the interface and behavior of their code before implementation. Optimizations of the code without changing its behavior. 
4. Faster delivery: With comprehensive test coverage, TDD helps prevent regressions by ensuring that existing functionality remains intact when new features are added or existing code is modified.
5. Higher customer satisfaction and value: With TDD, you can deliver code that meets the user's needs and expectations, as well as the business goals and requirements. The code is more reliable, functional, and user-friendly, resulting in a positive user experience and feedback.

Drawbacks:

1. Big time investment: For the simple case you lose some time of the actual implementation, but for complicated cases you lose measurable time.
2. Additional Complexity: For complex cases your test cases are harder to calculate.
3. Design Impacts: When design is not clear at the start and evolves as we go along. This process will force to redo your test which will generate a big work investment.
4. Test Maintenance: Maintaining a large suite of tests can become challenging, especially if the application undergoes frequent changes.

```

- [x] Answer the following: If we had 3 percent of our users still using IE, what would you advise for verifying our build for those people?

```
IE is not supported by microsoft and we have to covey same things to customer.

Definitely for initial proposal, we have to request to client for switching to major supported browsers ( e.g. Chrome-Firefox). There is one best ways is show popup or banner for "Use chrome/firefox for best bug free experience."
After this soft warning, we can have to make anyone of below choices.
In first choice, if we do not want to loose customers, then we can continue to support this 3 percent users with testing methodologies like Sanity, functional, UAT testing.
In second choice, we can limit the functionality slowly and after 2-3 releases we will redirect them to download chrome/firefox website. Which force user to redirect their choice of using browser.

```

- [x] Build a testing strategy against our environments. When do you advise these be run? What modifications do you suggest for our definition of done? What environments should this be run against and when? What tools would you leverage for reporting?

```

1. Development Environment:
Time to Test : Locally on each major development. Run on pipeline or job Daily one time (Before 2PM PST).
Testing Types: Focus on unit tests and component tests to ensure individual pieces of functionality work as expected.
When to Run: Run these tests continuously as part of your CI/CD pipeline triggered by code commits.
Tools: Jest, Mocha, Jasmine for unit testing; React Testing Library, Enzyme for component testing.
Definition of Done: All unit and component tests pass, and code coverage meets the defined threshold.
Suggestion : Introduce sonarqube type static analysis for find duplicate and complexity of code.

2. Integration Environment:
Time to Test : Before handover to QA. Run on pipeline as per code freeze time. On 3:45 PM PST everyday.
Testing Types: Conduct integration tests to ensure that components work together seamlessly and with external services.
When to Run: Run integration tests after each deployment to the integration environment, ideally nightly or on-demand.
Tools: Cypress, Appium for end-to-end testing; Jest, Mocha, Jasmine for API testing.
Definition of Done: All integration tests pass, including end-to-end and API tests, and any potential issues are addressed before promoting code to staging.
Suggestion: Create mock for third party data. Create jenkins or github pipeline to run on each PR merge.

3. Staging Environment:
Time to Test : Early as possible after 3:30 PM PST Wednesday till Thursday 4:00 PM PST. Start manual and automation testing together for more good test coverage and early bug find.
Testing Types: Execute regression tests to verify that new features and bug fixes do not introduce regressions or negatively impact existing functionality.
When to Run: Run regression tests after each deployment to the staging environment, ideally nightly or on-demand.
Tools: Cypress, Selenium WebDriver, Puppeteer for end-to-end testing; Jest, Mocha, Jasmine for API testing; Postman for API testing and monitoring.
Definition of Done: All regression tests pass, and user acceptance testing (UAT) is performed by stakeholders to ensure the application meets business requirements.

4. Production Environment:
Time to Test : Early as possible after 4:00 PM PST Thursday. Start sanity on production environment for release component.
Testing Types: Focus on monitoring and performance testing to ensure application stability and responsiveness.
When to Run: Monitor application performance and conduct periodic load tests during off-peak hours to simulate real-world usage patterns.
Tools: New Relic, Datadog, AppDynamics for application monitoring; Apache JMeter, Gatling for load testing.
Definition of Done: Application performance meets defined service level agreements (SLAs), and any anomalies or performance degradations are promptly investigated and addressed.

Additional Suggestion:
Mobile View: Perform mobile testing on staging environment with functional testing.
Continuous Monitoring: Implement continuous monitoring and alerting in all environments to detect issues proactively.
Documentation: Document the testing strategy, including testing types, tools, and execution schedules, to ensure consistency and clarity.
Feedback Loop: Establish a feedback loop to gather input from stakeholders and end users to continuously improve the testing strategy and ensure alignment with business goals.

```

When you're done, delete your `node_modules/` folder, zip up the file and email it back. Good luck!
