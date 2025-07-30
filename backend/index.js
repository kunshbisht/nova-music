const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Your API routes here
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Serve React frontend static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));