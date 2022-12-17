# Aquatics Empowered

This app uses React, Redux, Express, Passport, SweetAlert2 and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Features

-   Perform a water/chemical test and access the results at a later date
-   Edit one's own user profile
-   Manage Users (Edit user access (levels and facility access), delete users)
-   Manage Facilities (Add, Edit, Delete)
-   Setting a Default Facility (updates Home Page with pools at that facility)
-   View test history for a pool (see all test results for a certain pool)
-   About page that details information about the app

## Known Bugs

-   Home Page does not display the pools that match the facility selected
-   Home Page: Selecting "View Test History" is unimplemented
-   Home Page: Perform Water Test goes to the water test route and generally rather than connected to a route for a specific pool
-   Home Page - console.log: "list should have a unique "key" prop"
-   Home Page - console.log: "error in user pool saga"
-   Manage Facilities - Edit Facility - console.log "Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component."
-   Manage Facilities - Edit Facility - console.log "Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components."
-   Water Test page - should be hidden from Navbar
-   Water Test page - Test entry does not create a test for a specific pool
-   Water Test page - Acid/base should be "# of drops"
-   History page - Drop down menu with dates does not filter results by date
-   History page - Returning to history page after selecting a result when using the back button crashes the page (just needs to be refreshed)

## Unimplemented Features

-   Chart.js
-   Image upload
-   Nav Bar (by user_access level)
-   Water Condition parameters (connect these data and also display checkboxes and radio buttons)
-   Water Test page - Add appropriate range indicators
-   Water Test page - Does not display the current pool test is being performed on
-   Water Results page - Add appropriate range indicators
-   Water Results page - Parameters show despite empty value input in the field (would users want all fields to show regardless of data entered?)
-   Water Results page - Does not display the pool that the test was performed on or the time stamp

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

-   [Node.js](https://nodejs.org/en/)
-   [PostrgeSQL](https://www.postgresql.org/)
-   [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `aquatics_empowered` and copy data in database.sql

## Development Setup Instructions

-   Run `npm install`
-   Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
-   Start postgres if not running already by using `brew services start postgresql`
-   Run `npm run server`
-   Run `npm run client`
-   Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
    1. `POST /api/user/register` registers a new user, see body to change username/password
    2. `POST /api/user/login` will login a user, see body to change username/password
    3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

-   Start postgres if not running already by using `brew services start postgresql`
-   Run `npm start`
-   Navigate to `localhost:5003`

## Lay of the Land

Directory Structure:

-   `src/` contains the React application
-   `public/` contains static assets for the client-side
-   `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
-   `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

-   src/components
    -   App/App
    -   Footer/Footer
    -   Nav/Nav
    -   AboutPage/AboutPage
    -   InfoPage/InfoPage
    -   UserPage/UserPage
    -   LoginPage/LoginPage
    -   RegisterPage/RegisterPage
    -   LogOutButton/LogOutButton
    -   ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Setup a database with Bit.io
1. Create the necessary tables
1. Link the Bit.io database to the Heroku project
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy
