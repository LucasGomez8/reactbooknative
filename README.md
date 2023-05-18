# ReactbookNative
## What is?
This is a test App what im doing for funny, just to practice and entertainment

## Technologies
This app uses:
* React Native Expo
* Node.JS
* MySql
* Express
* Axios

# Get Started
1. Clone the repository to a local directory, then realize command npm i to install al the packages
2. Next, you can find the Sql initial Script with data inserts in the follow route "./server/public/db-script"
3. Once you excecute the script in your MySql SGBDM, you just have to run the Node server
4. How i run it? Just enter to the server file -> "cd ./Server" and execute "npm run dev"
5. Then, you just have to run the app "npx expo start", if you uses expo just scan the QR to access into the app, otherwhise you just execute "w" command for web app
6. You can use "admin admin" to enter the app
7. Just fun!

# How's work
With Context and Reducer methodologies, i can just use some global variables to handle de states in the differents components of the app.
Context just realizes some calls to the server side (Nodejs handling with nodemon) and late just save the data callback into dispatch function from reducer
