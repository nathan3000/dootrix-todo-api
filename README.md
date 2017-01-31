# Node API for a todo app

API to go along with [https://github.com/nathan3000/dootrix-todo](https://github.com/nathan3000/dootrix-todo)

## Technologies

### API
- Express, Node
- MongoDB, Mongoose
- bcrypt, JsonWebTokens, passport
- Babel

### Frontend
- React, Redux, ES6
- Babel, Webpack
- Mocha, Enzyme, Sinon, Chai

## Features
- [x] Allow the user to create a new task and add it to the users schedule/list of tasks.
- [x] Allow the user to mark the task as complete.
- [x] Use a RESTful JSON web service to communicate with the backend.
- [x] Make use of an appropriate database technology to store the task information.
 
### Optional:
- [x] Allow a user to authenticate with the application. 
- [x] Allow a user to explicitly log out.
- [x] Allow users to sign up. (API end point only)

## Demo

Username: demo<br />
Password: demo

(Free tier Heroku, might be slow on first hit) <br />
[Demo link](https://safe-dawn-70415.herokuapp.com) 

Tested in Chrome 55.

## Installation
To install dependencies.

###```npm install```

## Configuration

To run the app locally you'll need to set two environment variables:
Creating a *.env* file with the following should do the trick (dotenv loads them automagically)
```
DATABASE_URL=[mongo url]
SECRET=[your secret]
```

## Development mode

### `npm run dev`

Runs the app in development mode (live reload).<br>
Open [http://localhost:8080](http://localhost:7000) to view it in the browser.

## Production build
### `npm run build`


