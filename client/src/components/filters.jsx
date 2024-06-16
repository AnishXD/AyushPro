import React, { useState } from 'react';
import { locations, services, specialties } from './filtersData';

const Filters = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    services: [],
    specialties: []
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter(item => item !== value)
        : [...prevFilters[category], value];

      const updatedFilters = {
        ...prevFilters,
        [category]: updatedCategory
      };

      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const renderCheckboxes = (category, options) => {
    return options.map(option => (
      <div key={option} className="flex items-center mb-2">
        <input
          type="checkbox"
          value={option}
          onChange={() => handleCheckboxChange(category, option)}
          className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
        />
        <label className="ml-2 text-gray-700 cursor-pointer">{option}</label>
      </div>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Location</h3>
      <div className="mb-6">
        {renderCheckboxes('location', locations)}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Services</h3>
      <div className="mb-6">
        {renderCheckboxes('services', services)}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Specialties</h3>
      <div className="mb-6">
        {renderCheckboxes('specialties', specialties)}
      </div>
    </div>
  );
};

export default Filters;
