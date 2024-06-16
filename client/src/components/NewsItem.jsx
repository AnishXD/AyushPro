import React from "react";
import temp_pre from "../../public/temp_pre.jpg"

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  const formattedDate = date ? new Date(date).toDateString() : "Unknown Date";

  // Function to truncate the description to a certain length
  const truncateDescription = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        src={imageUrl || temp_pre}
        alt="News"
        className="w-full h-40 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title || "No Title"}</div>
        <p className="text-gray-700 text-base mb-2">
          {truncateDescription(description || "No Description", 100)}
        </p>
        <p className="text-gray-600 text-sm">
          By {author || "Unknown"} on {formattedDate}
        </p>
        <p className="text-gray-600 text-sm mb-2">Source: {source}</p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded inline-block text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
