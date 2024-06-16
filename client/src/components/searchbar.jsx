import React, { useState } from 'react';
import Search from '../assets/search.png';

const SearchBar = ({ onSearch }) => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleInputChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSearch = () => {
    if (!searchLocation.trim()) {
      alert('Please enter a valid location.');
      return;
    }
    onSearch(searchLocation);
  };

  return (
    <div className="w-1/2 mx-auto">
      <div className="w-full flex items-center bg-white focus:outline-none border border-gray-300 rounded py-1 px-4">
        <div className="mr-3">
          <img src={Search} alt="Search" height={30} width={30} />
        </div>
        <input
          type="text"
          className="flex-1 text-lg leading-normal focus:outline-none"
          placeholder="Enter your location"
          value={searchLocation}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-lg rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
