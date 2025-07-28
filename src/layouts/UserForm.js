import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CombinedUserForm = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState("");

  const [userData, setUserData] = useState({
    firstName: "",
    age: "",
    contactNumber: "",
    email: "",
    location: "",
    socialStatus: "",
    preferredLanguage: "",
    healthConcerns: "",
    modeOfReachability: "",
    verificationStatus: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );
          const data = await response.json();
          setUserData((prev) => ({ ...prev, location: data.display_name }));
        } catch (err) {
          setError("Failed to fetch address.");
        }
      },
      () => {
        setError("Please allow location access.");
      }
    );
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (
        selectedFile.type.startsWith("image") ||
        selectedFile.type.startsWith("video")
      ) {
        setPreview(URL.createObjectURL(selectedFile));
      } else {
        setPreview(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.title || !file || !userData.firstName) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("file", file);
    formData.append("uploadTime", new Date().toISOString());

    try {
      setUploading(true);
      await axios.post("http://localhost:9090/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadSuccess(true);
    } catch (err) {
      setError("Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  if (uploadSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 Thank You for Your Contribution!
          </h2>
          <p className="text-gray-700 mb-6">Your content has been uploaded successfully.</p>
          <button onClick={() => navigate("/")} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl space-y-4">
        <h2 className="text-2xl font-bold text-center text-purple-600">User & Content Submission</h2>

        {[
          { label: "Name", name: "firstName" },
          { label: "Age", name: "age", type: "number" },
          { label: "Contact Number", name: "contactNumber" },
          { label: "Email", name: "email", type: "email" },
          { label: "Title", name: "title" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={userData[name]}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        ))}

        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={userData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Location</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500"
            />
            <button type="button" onClick={getLocation} className="bg-blue-500 text-white px-4 rounded-lg mt-1">📍</button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Social Status</label>
          <select name="socialStatus" value={userData.socialStatus} onChange={handleChange} className="w-full border px-3 py-2 rounded-lg mt-1">
            <option value="">Select...</option>
            {['Student', 'Employed', 'Unemployed', 'Self-Employed', 'Other'].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Preferred Language</label>
          <select name="preferredLanguage" value={userData.preferredLanguage} onChange={handleChange} className="w-full border px-3 py-2 rounded-lg mt-1">
            <option value="">Select...</option>
            {['English', 'Marathi', 'Hindi', 'Other'].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Health Concerns</label>
          <textarea
            name="healthConcerns"
            value={userData.healthConcerns}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg mt-1"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Mode of Reachability</label>
          <select name="modeOfReachability" value={userData.modeOfReachability} onChange={handleChange} className="w-full border px-3 py-2 rounded-lg mt-1">
            <option value="">Select...</option>
            {['Email', 'Phone', 'WhatsApp', 'Social Media', 'Other'].map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Verification Status</label>
          <input
            type="text"
            name="verificationStatus"
            value={userData.verificationStatus}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Upload File</label>
          <input
            type="file"
            accept="*/*"
            onChange={handleFileChange}
            className="w-full border px-3 py-2 rounded-lg mt-1"
            required
          />
        </div>

        {preview && (
          <div className="mt-2">
            {file?.type?.startsWith("image") ? (
              <img src={preview} alt="preview" className="w-full rounded-lg border" />
            ) : file?.type?.startsWith("video") ? (
              <video controls className="w-full rounded-lg border">
                <source src={preview} type={file.type} />
              </video>
            ) : (
              <p className="text-sm text-gray-600">Selected file: {file.name}</p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={uploading}
          className={`w-full py-2 text-white font-semibold rounded-lg mt-4 transition duration-200 ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CombinedUserForm;
