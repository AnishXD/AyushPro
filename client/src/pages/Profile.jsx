import React, { useState } from "react";
import pp from "../assets/doc_new.jpg";
import loc from "../assets/loc_in.png";
import { Link } from "react-router-dom";
import msg from "../assets/msg.png";
import hos1 from "../assets/hos1.jpg";
import hos2 from "../assets/hos2.jpg";
import hos3 from "../assets/hos3.jpg";

const Profile = () => {
  const pediatricHospitals = [
    {
      id: "002",
      name: "Community Medical Center",
      location: "456 Elm Avenue, Townsville",
      specialties: ["Pediatrics", "Family Medicine", "Internal Medicine"],
      rating: 4.5,
      contact: {
        phone: "234-567-8901",
        email: "info@communitymedicalcenter.com",
      },
      imageUrl: hos1,
    },
    {
      id: "004",
      name: "Children's Hospital",
      location: "101 Pine Street, Kidstown",
      specialties: ["Pediatrics", "Neonatology", "Allergy & Immunology"],
      rating: 4.9,
      contact: {
        phone: "456-789-0123",
        email: "info@childrenshospital.com",
      },
      imageUrl: hos2,
    },
    {
      id: "005",
      name: "Sunset Pediatrics",
      location: "555 Sunset Avenue, Sunnyville",
      specialties: [
        "Pediatrics",
        "Adolescent Medicine",
        "Developmental Pediatrics",
      ],
      rating: 4.6,
      contact: {
        phone: "567-890-1234",
        email: "info@sunsetpediatrics.com",
      },
      imageUrl: hos3,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("hospitals");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container h-[190vh] mx-auto px-4 my-8">
      {/* First Div */}
      <div className="h-1/2 flex">
        <div className="w-1/3 flex justify-center items-center">
          <img
            src={pp}
            alt="profile photo"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="w-2/3 p-4 flex flex-col justify-evenly">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
              Victor Blane
            </h1>
            <div className="flex items-center text-gray-600">
              <img src={loc} alt="location" className="mr-2 w-5 h-5" />
              <span className="text-sm">New York, NY</span>
            </div>
          </div>
          <div className="flex justify-between mt-4 space-x-4">
            {/* Send Message Button */}
            <div className="flex items-center py-2 px-4 w-fit cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg">
              <img src={msg} alt="message" className="mr-2" width={40} />
              <span className="text-xl font-semibold">Send Message</span>
            </div>

            {/* Contacts Button */}
            <div className="flex items-center py-2 px-4 w-fit cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg">
              <img src={msg} alt="message" className="mr-2" width={40} />
              <span className="text-xl font-semibold">Contacts</span>
            </div>

            {/* Book Appointment Button */}
            <div className="flex items-center py-2 px-4 w-fit cursor-pointer transition-all duration-300 hover:text-blue-500 hover:bg-blue-100 hover:rounded-lg">
              <img src={msg} alt="message" className="mr-2" width={40} />
              <span className="text-xl font-semibold">Book Appointment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="h-1/2 flex">
        <div className="w-1/3">
          <div className="flex items-center mb-4">
            <h3 className="text-4xl font-bold mr-4">Disease</h3>
            <hr className="flex-grow border-gray-400" />
          </div>

          <div className="my-4">
            <div className="mb-4">
              <span className="text-2xl font-semibold text-gray-800">
                Tongue Ulcers
              </span>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-semibold text-gray-800">
                Arthritis
              </span>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <h3 className="text-4xl font-bold mr-4">Allergies</h3>
            <hr className="flex-grow border-gray-400" />
          </div>

          <ul className="text-gray-700 pl-4">
            <li className="py-1">Peanut Allergy</li>
            <li className="py-1">Latex Allergy</li>
            <li className="py-1">Mold Allergy</li>
            <li className="py-1">Pet Allergies</li>
          </ul>
        </div>

        <div className="w-2/3">
          <div className="flex justify-center border-b border-gray-300 mb-4">
            {/* Hospitals Button */}
            <button
              className={`py-2 px-4 text-lg focus:outline-none transition-colors ${
                selectedOption === "hospitals"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-700"
              }`}
              onClick={() => handleOptionChange("hospitals")}
            >
              Hospitals
            </button>

            {/* Reminder Button */}
            <button
              className={`py-2 px-4 text-lg focus:outline-none transition-colors ${
                selectedOption === "reminder"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-700"
              }`}
              onClick={() => handleOptionChange("reminder")}
            >
              Reminder
            </button>
          </div>

          {/* Content */}
          <div>
            {selectedOption === "hospitals" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pediatricHospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                  >
                    <Link to={`/hospital/${hospital.id}`}>
                      <img
                        className="w-full h-48 object-cover"
                        src={hospital.imageUrl}
                        alt={hospital.name}
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/hospital/${hospital.id}`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500">
                          {hospital.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-2">
                        Location: {hospital.location}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Specialties: {hospital.specialties.join(", ")}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Rating: {hospital.rating}
                      </p>
                      <Link
                        to={`/hospital/${hospital.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedOption === "reminder" && (
              <div className="bg-gray-100 p-4">
                <h3 className="text-4xl font-semibold mb-4 text-center">
                  Reminder Schedule
                </h3>

                {/* Reminder Items */}
                <div className="space-y-4">
                  <div className="bg-gray-200 rounded-md p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Appointment 1
                    </h4>
                    <p className="text-sm text-gray-600">Date: May 10, 2024</p>
                    <p className="text-sm text-gray-600">Time: 10:00 AM</p>
                    <p className="text-sm text-gray-600">
                      Location: Hospital A
                    </p>
                  </div>
                  <div className="bg-gray-200 rounded-md p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Appointment 2
                    </h4>
                    <p className="text-sm text-gray-600">Date: May 15, 2024</p>
                    <p className="text-sm text-gray-600">Time: 2:30 PM</p>
                    <p className="text-sm text-gray-600">
                      Location: Hospital B
                    </p>
                  </div>
                  <div className="bg-gray-200 rounded-md p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      Appointment 3
                    </h4>
                    <p className="text-sm text-gray-600">Date: May 20, 2024</p>
                    <p className="text-sm text-gray-600">Time: 11:00 AM</p>
                    <p className="text-sm text-gray-600">
                      Location: Hospital C
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
