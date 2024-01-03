// DnsDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DnsDashboard = () => {
  const [dnsData, setDnsData] = useState([]);

  useEffect(() => {
    // Make an API call to fetch DNS data
    axios.get('/api/dns') // Assuming you have a route defined for fetching DNS data
      .then(response => {
        setDnsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching DNS data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>DNS Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>A Record</th>
            {/* Add other table headers based on your DNS record types */}
          </tr>
        </thead>
        <tbody>
          {dnsData.map((record, index) => (
            <tr key={index}>
              <td>{record.domain}</td>
              <td>{record.aRecord}</td>
              {/* Add other table cells based on your DNS record types */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DnsDashboard;
