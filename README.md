# Backend Side of Online Job Board

## Project Management Tool:

[Trello CS399 Project: Team 15](https://trello.com/b/Vn3tMyRD/compsci-399-project-sprint-1-%F0%9F%9A%80-28-07-21-04-08-21)

## Project Description:

This is the Project files for the Frontend catered for the Computer Science Students using the Online JobBoard. The Abilities of this Project is to:

- Register / Login to access the Website
- View latest Jobs (Newly approved jobs)
- Search for approved Jobs
- Sort search results of approved Jobs
- Filter search results By Title or company, Salary range, Type of job, and Location
- Save Jobs to account
- View Jobs in detail
- Desktop and mobile systems Supported

## Final Report:

[Link to Final Report in Google Doc](ENTER THE URL HERE)

## Technologies

- NodeJS
- ExpressJS
- Middleware
- MongoDB

## Dependencies

    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "http-errors": "^1.8.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.13.7",
    "nodemailer": "^6.6.3",
    "nodemon": "^2.0.12",
    "superagent": "^6.1.0"

## Usage

### Install yarn

```terminal
$ npm install yarn -g //install yarn globally
```

for Windows add this command in Terminal: Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

### Config .env file

```terminal
$ cd Team15-Backend   // go to server folder
$ touch config.env    //create a new config.env file in root
```

### Start

```terminal
$ yarn install       // npm install pacakges
$ yarn run server // run it locally
// http://localhost:5000 be available
$ yarn run build // this will build the server code to es5 js codes and generate a dist file

```

### Pull request

Before your create a new pull request, you should do:

```terminal
$ yarn run lint
$ yarn run lint:fix     //fix eslint error

$ yarn run test
```

## Future Plans

In the future we plan to add more features for the Students, such as:

- In built job applying process. But this would be consisting of the following:
  - Student Profile
  - Student CV
  - Extra form for employers if they want to Quiz candidates
- More filtering options
- Employers Profile
  - To see more jobs from an employer
  - See about an employer
- Other features.

## Acknowledgements/Documentation

### Postman

https://www.postman.com/downloads/

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/be3d3034cbdf3cb868c2?action=collection%2Fimport)

### MongoDB Compass

https://www.mongodb.com/try/download/compass

##### Copy this link below for connecting

```terminal
mongodb+srv://team15:team15@Team15.fwezr.mongodb.net/test?authSource=admin&replicaSet=atlas-lc503h-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
```

### Node

https://nodejs.org/en/

### SendGrid



### Heroku

