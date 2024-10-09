// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Hello, World! Your Nodeapp is running.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
