// 1. Import the express library
const express = require('express');

// 2. Create an instance of the express application
const app = express();

//app.use(json);

// 3. Define the port the server will run on
// It's common to use 3000 for development
const port = 3000;

app.use(express.static('public'));
app.use(express.json());


// 4. Define a basic route for the root URL ('/')
// This sends a "Hello World!" message to anyone who visits the root of your site

/*
app.get('/', (req, res) => {
  res.send('Hello from your new Express server!');
});
*/

// A route to handle POST requests
app.post('/api/data', (req, res) => {
  // The parsed JSON data is available in req.body
  const jsonData = req.body;
  
  console.log('Received JSON data:', jsonData);

  // You can now process the data (e.g., save to a database)
  // and send a response back to the client
  res.status(200).json({
    message: 'JSON data received successfully!',
    receivedData: jsonData
  });
})

// 5. Make the server listen on the defined port
// The callback function logs a message to the console when the server starts
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});