import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Icons
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1673/1673188.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -35],
});

const volunteerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2991/2991537.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -35],
});

// Component to Move Map Focus
const MapFocus = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 12, { animate: true, duration: 1.5 });
    }
  }, [position, map]);
  return null;
};

const AddressMap = () => {
  const [users, setUsers] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState(null);
  const [focusedLocation, setFocusedLocation] = useState(null);
  const [viewType, setViewType] = useState("users");
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const userResponse = await axios.get("http://localhost:9090/api/auth/");
        const volunteerResponse = await axios.get("http://localhost:9090/api/volunteers/");
        setUsers(userResponse.data);
        setVolunteers(volunteerResponse.data);
      } catch (err) {
        setError("Error fetching locations.");
        console.error(err);
      }
    };
    fetchLocations();
  }, []);

  const handleLocationClick = (lat, lng) => {
    setFocusedLocation([lat, lng]);
    if (mapContainerRef.current) {
      mapContainerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="p-6 m-6 bg-white rounded-xl shadow-md text-center font-sans">
      <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">📍 Address Visualization on Map (OpenStreetMap)</h2>
      {error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setViewType("users")}
          className={`px-4 py-2 rounded-lg font-medium border ${
            viewType === "users" ? "bg-blue-600 text-white" : "bg-white border-blue-600 text-blue-600"
          } transition duration-300`}
        >
          View Users
        </button>
        <button
          onClick={() => setViewType("volunteers")}
          className={`px-4 py-2 rounded-lg font-medium border ${
            viewType === "volunteers" ? "bg-blue-600 text-white" : "bg-white border-blue-600 text-blue-600"
          } transition duration-300`}
        >
          View Volunteers
        </button>
      </div>

      {/* Map Display */}
      <div ref={mapContainerRef} className="rounded-xl overflow-hidden mb-6">
        <MapContainer
          center={[18.5204, 73.8567]}
          zoom={12}
          className="w-full h-[450px]"
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {(viewType === "users" ? users : volunteers).map((loc) =>
            loc.latitude && loc.longitude ? (
              <Marker
                key={loc.id}
                position={[loc.latitude, loc.longitude]}
                icon={viewType === "users" ? userIcon : volunteerIcon}
              >
                <Popup>
                  <strong>{loc.name}</strong> <br />
                  📍 {loc.type || "Volunteer"} <br />
                  📞 {loc.contactNumber}
                </Popup>
              </Marker>
            ) : null
          )}
          {focusedLocation && <MapFocus position={focusedLocation} />}
        </MapContainer>
      </div>

      {/* Location List */}
      <div className="text-left px-4 sm:px-10">
        <h3 className="text-2xl font-semibold text-[#2c3e50] mb-4">
          📌 {viewType === "users" ? "User" : "Volunteer"} Locations (Click to Focus)
        </h3>
        {(viewType === "users" ? users : volunteers).length === 0 ? (
          <p className="text-gray-500">No {viewType} requests found.</p>
        ) : (
          <ul className="space-y-3">
            {(viewType === "users" ? users : volunteers).map((location) =>
              location.latitude && location.longitude ? (
                <li
                  key={location.id}
                  onClick={() => handleLocationClick(location.latitude, location.longitude)}
                  className="bg-gray-100 rounded-lg px-4 py-2 shadow cursor-pointer hover:bg-orange-100 text-blue-700 transition"
                >
                  <strong className="text-[#2c3e50]">{location.name}:</strong> {location.type || "Volunteer"}
                </li>
              ) : null
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddressMap;
