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

// -------------------------------------------- ENDPOINTS --------------------------------------------

/****************************************
 * Business
****************************************/

app.get('', async (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'important stuff', 'ERROR.html'));
})

app.get('/players', async (req, res) => {
  try{
    res.status(200).send({ message: "trolo de mierda" })
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
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

app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));
app.post('/POST', (req, res) => {
  // Assuming the HTML file is sent as raw text in the request body
  const htmlContent = req.body;
    
  // Writing HTML content to a file
  fs.writeFile('uploaded.html', htmlContent, (err) => {
      if (err) {
          console.error('Error writing HTML file:', err);
          res.status(500).json({ error: 'Error writing HTML file.' });
      } else {
          console.log('HTML file saved successfully.');
          // Sending back the HTML content as response
          res.status(200).send(htmlContent);
      }
  });
});







app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})







let data = {
  users: ["tu vieja"],
  products: {}
};








// PUT endpoint
app.put('/PUT', (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    // Update the data for the given ID
    data[id] = newData;

    // Send a response
    res.json({ message: `Data with ID ${id} updated successfully`, updatedData: newData });
});



app.get('/players/salary', async (req, res) => {
  res.status(403).send({
    'error': 'Cannot access this information'
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});