const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Allow all cross-origin requests
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(bodyParser.text({ type: 'text/html' }));

// -------------------------------------------- ENDPOINTS --------------------------------------------

app.get('', async (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'important stuff', 'ERROR.html'));
})

app.get('/P', async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'important stuff', 'tutu.html'));
})

app.get('/c', async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'important stuff', 'gugu.html'));
})

app.get('/i', async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'important stuff', 'tata.html'));
})

app.get('/g', async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'important stuff', 'toto.html'));
})

app.get('/F', async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'important stuff', 'hyhy.html'));
})

app.post('/POST', (req, res) => {
  const htmlContent = req.body;
  fs.writeFile('uploaded.html', htmlContent, (err) => {
      if (err) {
          console.error('Error writing HTML file:', err);
          res.status(500).json({ error: 'Error writing HTML file.' });
      } else {
          console.log('HTML file saved successfully.');
          res.status(200).send(htmlContent);
      }
  });
});

let data = {
  users: ["tu vieja"],
  products: {}
};

app.put('/PUT', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    data[id] = newData;
    res.json({ message: `Data with ID ${id} updated successfully`, updatedData: newData });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});