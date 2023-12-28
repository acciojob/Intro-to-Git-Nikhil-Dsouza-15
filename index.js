const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  // Sending HTML content dynamically
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Git</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p>My intro to Git and colab</p>
        <script type="text/javascript" src="./script.js"></script>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.status(200).send(`${a + b}`);
});

module.exports = app;
