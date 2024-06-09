# ChangeLog for Cypress
##### _Author: Sagar Khalasi_
##### _UpdatedAt : 30-APR-2024_

### Code Level Changes :
```
1. Added `data-testid` for places where needs to add for better locator finding.
2. Added library (commands) in cypress for functions like `clearAndType`, `getNthElementByTextAndTestId`, `verifyColumnValue`.
3. Added tags to identify and run test cases separatly.
4. Use before and after hooks for the code optimisations.
5. Test cases can be run independelty.
```

----

### Framework Level Changes/Support :
```
1.  Setup cypress with yarn and created folder name `cypress` from scratch.
2.  Given support for the locate element with Xpath. (Not natively support in cypress)
2.  Given support for running parallel tests which also not supported natively in free version. (WIP for report merge).
3.  Given support for XML and JSON report for custom creation.
4.  Given support for write selectors for better optimisations.
```
----

### Different scripts in `package.json` :
------
    - `test:cypress` for opening cypress dashboard.
    - `sample:test` for running single cy/spec/test file with headed mode.
    - `e2e:chrome` for running all test chrome browser with headless mode.
    - `e2e:firefox` for running all test firefox browser with headless mode. 
    - `e2e:chrome:headed` for running all test chrome browser with headed mode.
    - `e2e:firefox:headed` for running all test firefox browser with headed mode. 
    - `merge:reports` for merging the reports.
    - `cy:parallel` for running test parellel.
-----

### Sample run command :
```
yarn install
yarn e2e:chrome
```
----

### Future scope

_Note:Due to time and system knowledge constraint, but below items are in-progress or can be added_
```
1. Support for session management.
2. Generate parallel test report and merge.
2. Support for the code linting errors.
3. Support for Test case management tool api support for udpate test results.
4. More optimisation on test case code writing.
5. Demo video for the new joinee.
```

-----

>Thank you for reading

----