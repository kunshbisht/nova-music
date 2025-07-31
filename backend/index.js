const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

process.on('uncaughtException', console.error);
process.on('unhandledRejection', console.error);

// Your API routes here
app.get('/api/chart', async (req, res) => {
  try {
    const response = await fetch('https://api.deezer.com/chart');
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Deezer API error' });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Deezer chart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

console.log(app._router.stack.map(r => r.route?.path).filter(Boolean));

app._router.stack.forEach((layer) => {
  if (layer.route) {
    console.log('Route:', layer.route.path);
  }
});

const PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
} catch (e) {
  console.error('Error starting server:', e);
}