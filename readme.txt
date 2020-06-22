To Run Server
    $ npm run server

To Run Client
    $ npm run client

To Run Them Together
    $ npm run dev

*************

- Create an empty project called "borsaApp"
- npm init
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm init -y
- Change "package.json"
    Use "server.js" instead of "index.js"
- Install packages
    MEHMETs-MacBook-Pro:jwtReact mehmetak$ npm install express passport passport-google-oauth20@2 passport-local passport-jwt express-validator cookie-session bcryptjs jsonwebtoken
- Dev dependencies
    MEHMETs-MacBook-Pro:jwtReact mehmetak$ npm install -D nodemon concurrently
- Add scripts to "package.json"
    - add "start"
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js"
          },
- create file "server.js"
- Git
    - Create a file ".gitignore"
           /node_modules
    - Initialize the git repository
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git init
    - Add all files
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git add .
    - Commit
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git commit -m "Initial Commit"
    - Share in GitHub
        VCS/Import Into Version Control/Share Project in Github

-------- Client
- ceate react app
    mehmetak@MEHMETs-MacBook-Pro contact-keeper % npx create-react-app client
- To run them together use Concurently
    - In server's package.json
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js",
            "client": "npm start --prefix client",
            "clientinstall": "npm install --prefix client",
            "dev": "concurrently \"npm run server\" \"npm run client\""
          },

- Use proxy for direct rooting to local host
    - Copy the setupProxy.js from an older project

- Remove git repository from client
    - Delete README.md in client folder.

- Install some dependencies in client
    - cd client
    - npm install axios react-router-dom http-proxy-middleware

- Create a React Component
    rscp: Creates a stateless React component with PropTypes and ES6 module system
    rsc: Creates a stateless React component without PropTypes and ES6 module system

- Copy App.css from the project

- Create Context
    - Create folder "context" under src
        - Create file types.js
        - Create folder auth under context
            - Create files
                - AuthContext.js
                - AuthReducer.js
                - AuthState.js

- Create AppInit Component for initializing the applicatrion
- Use PrivateRoute for routing the components that will be seen after login
- Use PubliceRoute for routing the components that will be seen if you are not logged in. Especially important for the home page redirected from the server site after login.

