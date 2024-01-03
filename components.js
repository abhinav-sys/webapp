// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [dnsRecords, setDnsRecords] = useState([]);

  useEffect(() => {
    // Fetch DNS records from the backend
    axios.get('/api/dns').then((response) => {
      setDnsRecords(response.data);
    });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div>
      <h1>DNS Manager Dashboard</h1>
      {/* Display DNS records in a table or other format */}
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dnsRecords.map((record) => (
            <tr key={record._id}>
              <td>{record.domain}</td>
              <td>{record.type}</td>
              <td>{record.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
