import React, { useState } from 'react';

// Dummy data for stores
const storesData = [
  { id: 1, name: 'Seal Store A', zipCode: '10001', city: 'New York' },
  { id: 2, name: 'Seal Store B', zipCode: '10002', city: 'New York' },
  { id: 3, name: 'Seal Store C', zipCode: '10001', city: 'Brooklyn' },
  { id: 4, name: 'Seal Store D', zipCode: '10003', city: 'Manhattan' },
  { id: 5, name: 'Seal Store E', zipCode: '10002', city: 'Brooklyn' },
];

const zipCodes = ['10001', '10002', '10003', '10004'];
const cities = ['New York', 'Brooklyn', 'Manhattan'];

const Stores = () => {
  const [selectedZipCode, setSelectedZipCode] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredStores, setFilteredStores] = useState(storesData);

  // Handle zip code change
  const handleZipCodeChange = (event) => {
    const zipCode = event.target.value;
    setSelectedZipCode(zipCode);
    filterStores(zipCode, selectedCity);
  };

  // Handle city change
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    filterStores(selectedZipCode, city);
  };

  // Filter stores based on zip code and city
  const filterStores = (zipCode, city) => {
    const filtered = storesData.filter(store =>
      (zipCode ? store.zipCode === zipCode : true) &&
      (city ? store.city === city : true)
    );
    setFilteredStores(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-2xl font-bold mb-4">Find a Seal Store</h1>

      <div className="mb-6">
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-lg font-semibold mb-2">Select Zip Code:</label>
          <select
            id="zipCode"
            value={selectedZipCode}
            onChange={handleZipCodeChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="">Select a zip code</option>
            {zipCodes.map(zipCode => (
              <option key={zipCode} value={zipCode}>{zipCode}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-lg font-semibold mb-2">Select City:</label>
          <select
            id="city"
            value={selectedCity}
            onChange={handleCityChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Stores:</h2>
        {filteredStores.length > 0 ? (
          <ul className="list-disc pl-5">
            {filteredStores.map(store => (
              <li key={store.id} className="mb-2">
                {store.name} (Zip Code: {store.zipCode}, City: {store.city})
              </li>
            ))}
          </ul>
        ) : (
          <p>No stores available for the selected zip code or city.</p>
        )}
      </div>
    </div>
  );
};

export default Stores;
