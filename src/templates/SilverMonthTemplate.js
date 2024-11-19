import React from 'react';
import Navbar from '../components/Navbar';

const SilverMonthTemplate = ({ pageContext }) => {
  const { year, month, data } = pageContext;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>
          Silver Prices for {`${year}-${String(month).padStart(2, '0')}`}
        </h1>
        <div style={{ overflowX: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
            <thead>
              <tr style={{ backgroundColor: '#007bff', color: '#fff', textAlign: 'left' }}>
                <th style={{ padding: '12px 16px' }}>Date</th>
                <th style={{ padding: '12px 16px' }}>Silver Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#ffffff',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e9ecef')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#f8f9fa' : '#ffffff')}
                >
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid #dee2e6' }}>{item.Date}</td>
                  <td style={{ padding: '12px 16px', borderBottom: '1px solid #dee2e6' }}>{item.Silver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#6c757d' }}>
          <p>
            Data provided for informational purposes only. <br />
            Prices are updated monthly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SilverMonthTemplate;
