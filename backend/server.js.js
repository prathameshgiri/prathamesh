const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// ✅ Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, '..')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Handle form
app.post('/contact', (req, res) => {
  const { name, phone, email, message } = req.body;
  console.log({ name, phone, email, message });
  res.send('Form submitted successfully!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
