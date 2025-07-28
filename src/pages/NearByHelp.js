import React, { useEffect, useState } from "react";
import axios from "axios";

const NearbyHelp = () => {
  const [helpers, setHelpers] = useState([]);

  useEffect(() => {
    fetchHelpers();
  }, []);

  const fetchHelpers = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/volunteers/");
      setHelpers(response.data);
    } catch (error) {
      console.error("Error fetching helpers:", error);
    }
  };

  const HelperCard = ({ helper }) => (
    <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 my-3 shadow-md">
      <h3 className="text-pink-900 text-lg font-semibold">{helper.name}</h3>
      <p className="my-1">
        <strong>Role:</strong> {helper.type.replaceAll("_", " ")}
      </p>
      <p className="my-1">
        <strong>Contact:</strong> {helper.contactNumber}
      </p>
      <p className="my-1">
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${helper.email}`}
          className="text-pink-700 hover:underline"
        >
          {helper.email}
        </a>
      </p>
      {helper.contactNumber && (
        <p className="my-1">
          <strong>WhatsApp:</strong>{" "}
          <a
            href={`https://wa.me/${helper.contactNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-700 hover:underline"
          >
            Message on WhatsApp
          </a>
        </p>
      )}
    </div>
  );

  const filterByType = (type) => helpers.filter((h) => h.type === type);

  return (
    <div className="px-5 py-6 max-w-5xl mx-auto font-sans">
      <h2 className="text-2xl text-center text-pink-700 font-bold mb-6">
        Nearby Help & Support
      </h2>

      <div className="my-6">
        <h3 className="text-xl text-center text-pink-700 font-semibold mb-4">
          Available Doctors
        </h3>
        {filterByType("DOCTOR").length > 0 ? (
          filterByType("DOCTOR").map((helper) => (
            <HelperCard key={helper.id} helper={helper} />
          ))
        ) : (
          <p className="text-center text-gray-600">
            No doctors available nearby.
          </p>
        )}
      </div>

      <div className="my-6">
        <h3 className="text-xl text-center text-pink-700 font-semibold mb-4">
          Available Volunteers
        </h3>
        {helpers.filter((h) => h.type !== "DOCTOR").length > 0 ? (
          helpers
            .filter((h) => h.type !== "DOCTOR")
            .map((helper) => <HelperCard key={helper.id} helper={helper} />)
        ) : (
          <p className="text-center text-gray-600">
            No volunteers available nearby.
          </p>
        )}
      </div>
    </div>
  );
};

export default NearbyHelp;
