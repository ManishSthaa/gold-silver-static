import React from 'react';
import Navbar from '../components/Navbar';
import PriceTable from '../components/PriceTable';

const SilverPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <div style={{ flex: 1, padding: '20px' }}>
      <PriceTable type="Silver" />
    </div>
  </div>
);

export default SilverPage;
