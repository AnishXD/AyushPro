import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from "../components/searchbar";
import { AllHospital, Filters } from "../components";
import { locations, services, specialties } from '../components/filtersData';

const SearchPage = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [filters, setFilters] = useState({
    location: [],
    services: [],
    specialties: []
  });

  const handleSearch = (searchLocation) => {
    setLocationFilter(searchLocation);
    // Clear other filters when searching by location
    setFilters({
      location: [searchLocation],
      services: [],
      specialties: []
    });
  };

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <div>
      <div className="py-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <hr />
      <div className="flex h-full">
        <div className="w-1/5">
          <Filters onFilterChange={handleFilterChange} />
        </div>
        <AllHospital location={locationFilter} filters={filters} />
      </div>
    </div>
  );
};

export default SearchPage;