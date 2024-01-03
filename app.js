const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/dns-manager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/dns', require('./routes/dnsRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



