const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const bodyParser = require('body-parser');

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

app.get('/players', async (req, res) => {
  try{
    res.status(200).send({ message: "trolo de mierda" })
    }catch(e){
      res.status(500).send({'error': 'Internal server error'})
    }
})

app.use(bodyParser.json());

app.post('/api/post_data', (req, res) => {
  // Assuming JSON data is sent in the request body
  const data = req.body;

  // Process the data as needed (e.g., save to a database)
  // For demonstration, let's just echo back the received data
  res.json(data);
});
app.get('/boom', async (req, res) => {
  res.status(500).json({ message: "My bad" })
})

let data = {
  users: ["tu vieja"],
  products: {}
};

// PUT endpoint
app.put('/api/data/:id', (req, res) => {
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