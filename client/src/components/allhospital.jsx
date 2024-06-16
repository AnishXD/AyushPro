import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import hos1 from './hos1.jpg';

const AllHospital = ({ location, filters }) => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        let apiUrl = `http://localhost:5000/api/hospitals`;

        // Add query parameters for location, services, and specialties
        const queryParameters = new URLSearchParams();
        if (location) {
          queryParameters.append('location', location);
        }
        if (filters.services.length > 0) {
          queryParameters.append('services', filters.services.join(','));
        }
        if (filters.specialties.length > 0) {
          queryParameters.append('specialties', filters.specialties.join(','));
        }

        const response = await fetch(`${apiUrl}?${queryParameters.toString()}`);
        const data = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, [location, filters]);

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-semibold p-2">Hospital List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="max-w-sm bg-black border border-gray-200 rounded shadow dark:bg-white">
            <Link to={hospital.website} target="_blank" rel="noopener noreferrer">
              <img className="rounded-t" src={hos1} alt={hospital.name} />
            </Link>
            <div className="p-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                <Link to={hospital.website} target="_blank" rel="noopener noreferrer">{hospital.name}</Link>
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Location: {hospital.location}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Specialties: {hospital.specialties.join(', ')}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Rating: {hospital.rating}
              </p>
              <a href={hospital.website} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHospital;
