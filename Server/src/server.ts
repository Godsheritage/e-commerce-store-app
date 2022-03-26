// todo add and initialize typescript to backend server
// todo implement the mvc pattern 
// todo set up the application after best practices
// todo seperate server codde and express middleware
// todo hostserver the front end with the server 

import http from 'http'

import { app } from './app';

const PORT = process.env.PORT || 5000;

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}...`)
})

