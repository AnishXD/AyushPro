import React from "react";
import { Link } from "react-router-dom";
import brain from "../assets/brain.png";
import nerves from "../assets/nerves.png";
import bones from "../assets/bones.png";
import skin from "../assets/skin.png";
import gyno from "../assets/gyno.png";
import surgeon from "../assets/surgeon.png";
import pediatrics from "../assets/pediatrics.jpg";
import cancer from "../assets/cancer.png";
import anesth from "../assets/anesth.png";
import rd from "../assets/radiology.png";
import ent from "../assets/ent.png";
import other from "../assets/other.png";

const Categories = () => {
  const categories = [
    { id: 1, imageUrl: brain, name: "Psychiatry" },
    { id: 2, imageUrl: nerves, name: "Neurology" },
    { id: 3, imageUrl: bones, name: "Orthopedics" },
    { id: 4, imageUrl: skin, name: "Dermatology" },
    { id: 5, imageUrl: gyno, name: "Gynecology" },
    { id: 6, imageUrl: surgeon, name: "Surgery" },
    { id: 7, imageUrl: pediatrics, name: "Pediatrics" },
    { id: 8, imageUrl: cancer, name: "Oncology" },
    { id: 9, imageUrl: anesth, name: "Anesthesiology" },
    { id: 10, imageUrl: rd, name: "Radiology" },
    { id: 11, imageUrl: ent, name: "ENT" },
    { id: 12, imageUrl: other, name: "Others" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Explore Medical Categories</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.id} to={`/search?specialties=${encodeURIComponent(category.name)}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer flex flex-col items-center">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2 text-center">{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
