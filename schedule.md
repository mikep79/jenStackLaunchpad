JEN Stack Launchpad
===

Start up project to get acquainted with client/server behavior and syntax.

Tech:
---

- JQuery
- Javascript
- Node
- Express
- HTML

Setup
---

Fork and clone this repo. 

Node has already been installed in this project. However, you'll need to the needed packages. 

Browse to the folder into which the project was cloned and run the following in terminal:

```npm install```

This will install Node modules as set up in package.json which was created when the project was first made.

Instructions
===

Spin up the server by entering the following in terminal:

```npm start```

You should see a message that says "server up on 3000". Note that console.log on server files show in terminal.

Open to "localhost:3000" in your browser and you should see the index.html for our project.

Server-side changes
---

Every time you make a change to "server.js" you are making a server-side change and you'll need to restart the server.

To do this:

- close the server with ```ctrl+c``` in terminal 
- restart with ```npm start```

Your Mission
---

When the user clicks the button on the DOM a request is sent to a GET route the server. Once the request is received on the server, use a console.log to show that the request was received. The server will next send back a response to the client. When the client receives the response console.log it out.

Checklist:
---
- create GET route in server.js
- handle click event in client.js
- create $ajax request in click event that makes a GET request to the new route
- test $ajax request by having the route console.log a message when the GET route is hit
- have the route send a response
- handle the response in client.js by logging it out

Stretch Goals:
---

-! run GET $ajax call on page load
-! create a counter in server.js that counts how many times the get route has been called and show in terminal with console.log
-! return an object from the server that has the number of times the route has been called
- display that number on the DOM
- create a POST route
- create another button on the page that makes a request to the POST route and sends an object literal
- console.log the req.body as received by the POST route on server
- create an input field on the HTML that will allow the user to input a string. Change the POST button to use the user input
- how can you handle the POST route data on the server?