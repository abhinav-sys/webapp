
// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('API is working!');
// });

// module.exports = router;


// dnsRoutes.js
const express = require('express');
const router = express.Router();
const DnsRecord = require('../models/DnsRecord'); // Import your MongoDB model

// Route to fetch DNS records
router.get('/', async (req, res) => {
  try {
    // Fetch all DNS records from the database
    const dnsRecords = await DnsRecord.find();

    res.json({ success: true, data: dnsRecords });
  } catch (error) {
    console.error('Error fetching DNS records:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Other routes for CRUD operations can be added here

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// // Route to make an API call
// router.get('/makeApiCall', async (req, res) => {
//   try {
//     // Make an example API call to some external service
//     const externalApiResponse = await axios.get('http://localhost:5000/api/dns');

//     // Process the response as needed
//     const dataFromExternalApi = externalApiResponse.data;

//     res.json({ success: true, data: dataFromExternalApi });
//   } catch (error) {
//     console.error('Error making API call:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
