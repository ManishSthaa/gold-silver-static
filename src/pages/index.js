import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path to your Navbar component
import Home from '../components/Home'; // Adjust the path to your Home component

const IndexPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Home />
      </div>
    </div>
  );
};

export default IndexPage;
