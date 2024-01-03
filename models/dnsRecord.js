
const mongoose = require('mongoose');

const dnsRecordSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
  },
  recordType: {
    type: String,
    enum: ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT', 'DNSSEC'],
    required: true,
  },

});

const DnsRecord = mongoose.model('DnsRecord', dnsRecordSchema);

module.exports = DnsRecord;


// const express = require('express');
// const router = express.Router();
// const DnsRecord = require('../models/DnsRecord');

// // Create a DNS record
// router.post('/', async (req, res) => {
//   try {
//     const newRecord = new DnsRecord(req.body);
//     const savedRecord = await newRecord.save();
//     res.json(savedRecord);
//   } catch (error) {
//     console.error('Error creating DNS record:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Read all DNS records
// router.get('/', async (req, res) => {
//   try {
//     const allRecords = await DnsRecord.find();
//     res.json(allRecords);
//   } catch (error) {
//     console.error('Error fetching DNS records:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Read a specific DNS record by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const record = await DnsRecord.findById(req.params.id);
//     if (!record) {
//       return res.status(404).json({ error: 'DNS Record not found' });
//     }
//     res.json(record);
//   } catch (error) {
//     console.error('Error fetching DNS record by ID:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Update a DNS record by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedRecord = await DnsRecord.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedRecord) {
//       return res.status(404).json({ error: 'DNS Record not found' });
//     }
//     res.json(updatedRecord);
//   } catch (error) {
//     console.error('Error updating DNS record by ID:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Delete a DNS record by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedRecord = await DnsRecord.findByIdAndRemove(req.params.id);
//     if (!deletedRecord) {
//       return res.status(404).json({ error: 'DNS Record not found' });
//     }
//     res.json(deletedRecord);
//   } catch (error) {
//     console.error('Error deleting DNS record by ID:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;


// // CRUD Operations

// // Create operation
// async function createDnsRecord(data) {
//   const newRecord = new DnsRecord(data);
//   return newRecord.save();
// }

// // Read operation
// async function getDnsRecords(query = {}) {
//   return DnsRecord.find(query);
// }

// // Update operation
// async function updateDnsRecord(recordId, updatedData) {
//   return DnsRecord.findByIdAndUpdate(recordId, updatedData, { new: true });
// }

// // Delete operation
// async function deleteDnsRecord(recordId) {
//   return DnsRecord.findByIdAndDelete(recordId);
// }

// module.exports = {
//   DnsRecord,
//   createDnsRecord,
//   getDnsRecords,
//   updateDnsRecord,
//   deleteDnsRecord,
// };

