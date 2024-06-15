// components/VehicleUserDetail.jsx

import React from 'react';

const VehicleUserDetail = () => {
  return (
    <div>
      <h1>Vehicle User Detail</h1>
      <form>
        <label htmlFor="make">Make:</label>
        <input type="text" id="make" name="make" />

        <label htmlFor="model">Model Number:</label>
        <input type="text" id="model" name="model" />

        {/* Add more fields as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VehicleUserDetail;
