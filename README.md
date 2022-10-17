# The Carrot Events App
_Made with 💕 for Brainhub_

## Introduction
At the beginning of October, I started the interview process with the software house named Brainhub. They are based in the city of Gliwice so it's my area. The position I am applying for is the Full stack software developer. They send me the following task and they gave me one week to solve it. This is my attempt.

## Description
In the beginning, we want you to create a simple app with frontend implemented in React and connected with a simple API written in Node.js with data saved in DB (e.g., MongoDB, PostgreSQL, SQLite, MySQL).

The application should allow a user to add an event to the database, with the
following fields:
 - [ ] First name (required)
 - [ ] Last name (required)
 - [ ] Email (required, valid email address)
 - [ ] Event date (required, simple date picker)

What's essential for us?:
 - [ ] Tests for frontend and backend
 - [ ] Data validation on frontend and backend
 - [ ] Error handling
 - [ ] State management on frontend (form and request lifecycle state)
 - [ ] Readme with all information needed to install and run the app, run tests
 - [ ] Catalogs and components structure
 - [ ] Code readability and extensibility

If you have any questions, don't be afraid to ask. Good luck!

## How to run
### Development with containers
 - You will need [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/)
 - Clone the repository
   ```
   $ git clone git@github.com:imvanzen/carrot-events.git 
   ```
 - Ensure you are in the main directory 
   ```
   $ /path-in-your-fs/carrot-events
   ```
 - Run script
   ```
   $ npm run docker:dev
   ```
 - Keep your fingers crossed with me that the containers will build and start up.
 - Website is running on port 3000 and backend on port 5000
 - Rebuild containers after any change `(service_name: web | server)`
   ```
   $ npm run docker:dev --build <service_name>
   ```

### Development with hotrealoading
- You will need [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/)
 - Clone the repository
   ```
   $ git clone git@github.com:imvanzen/carrot-events.git 
   ```
 - Ensure you are in the main directory
   ```
   $ /path-in-your-fs/carrot-events/
   ```
 - Run script in order to setup database
   ```
   $ npm run docker:dev postgres
   ```
 - Keep your fingers crossed with me that the containers will build and start up.
 - Postgres is running
 - Ensure you are in the web directory
   ```
   $ /path-in-your-fs/carrot-events/web/
   ```
 - Run script in order to setup database
   ```
   $ npm run start
   ```
 - Ensure you are in the web directory
   ```
   $ /path-in-your-fs/carrot-events/server/
   ```
 - Run script in order to setup database
   ```
   $ npm run dev
   ```
   

## Milestones
 - [x] Setup Containers
   - [x] Database 
   - [x] Server
   - [x] Website
 - [x] Setup Simple Test for startup
   - [x] Server
   - [x] Website
 - [x] Server Functionality
   - [x] Events Resource API
     - [x] Create Event
     - [x] Test Create
     - [x] Validate Event
     - [x] Test Validate
     - [x] List Events
     - [x] Test List
     - [x] Update Event
     - [ ] Test Update
     - [x] Delete Event
     - [ ] Test Delete
   - [X] API Error Handling - Beautyful
     - [X] 400
     - [x] 404
     - [x] 500
   - [x] Website Functionality
     - [ ] Website Startup Test
     - [x] Events List Component
     - [ ] Test Events List
     - [x] Event Create Form Component
     - [ ] Test Events Create Form
     - [x] Event Edit Form Component
     - [ ] Test Events Create Form
     - [x] Event Delete Component
     - [ ] Test Events Create Form
 - [ ] Overview & Docs update

## Issues
 - [ ] Heavy containers
 - [ ] Problem with timezones during insert and fetch 
 - [ ] Event list ordering
 - [ ] Mess in NPM scripts in package json