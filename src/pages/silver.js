import React from 'react';
import { graphql, Link } from 'gatsby';
import Navbar from '../components/Navbar';

const SilverPage = ({ data }) => {
  const prices = data.allSilverPricesCsv.nodes;

  const yearMonthMap = {};
  prices.forEach((item) => {
    const [month, year] = item.Date.split('/').slice(0, 2);

    if (!yearMonthMap[year]) {
      yearMonthMap[year] = new Set();
    }
    yearMonthMap[year].add(month);
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#343a40' }}>
          Silver Prices by Year and Month
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
          }}
        >
          {Object.entries(yearMonthMap).map(([year, months]) =>
            Array.from(months).map((month) => (
              <Link
                to={`/silver/${year}/${month}`}
                key={`${year}-${month}`}
                style={{
                  textDecoration: 'none',
                  padding: '20px',
                  borderRadius: '8px',
                  background: '#c0c0c0',
                  textAlign: 'center',
                  color: '#343a40',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                {`${year}-${String(month).padStart(2, '0')}`}
              </Link>
            ))
          )}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#6c757d' }}>
          <p>
            Select a month to view detailed silver price trends. <br />
            Data updated regularly for accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allSilverPricesCsv {
      nodes {
        Date
        Silver
      }
    }
  }
`;

export default SilverPage;
