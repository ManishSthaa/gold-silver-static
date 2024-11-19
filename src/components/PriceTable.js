import React from 'react';
import { Link } from 'gatsby';

const PriceTable = ({ type, uniquePages }) => {
  return (
    <div className="price-table-container">
      <h3>{type} Prices</h3>
      <ul>
        {uniquePages.map(({ year, month, day }, index) => (
          <li key={index}>
            <Link to={`/prices/${year}/${month}/${day}`}>
              {`Prices for ${month}/${day}/${year}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceTable;
