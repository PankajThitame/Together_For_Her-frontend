import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContentUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !file || !uploadedBy) {
      alert("Please provide a title, uploader name, and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("uploadedBy", uploadedBy);
    formData.append("uploadTime", new Date().toISOString());

    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:9090/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Upload response:", response.data);
      setUploadSuccess(true);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("File upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleUploadAgain = () => {
    setTitle("");
    setDescription("");
    setFile(null);
    setUploadedBy("");
    setPreview(null);
    setUploadSuccess(false);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  if (uploadSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 Thank You for Your Contribution!
          </h2>
          <p className="text-gray-700 mb-6">
            Your content has been uploaded successfully.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleUploadAgain}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md"
            >
              Upload Again
            </button>
            <button
              onClick={handleGoHome}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Upload Your Content
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Enter description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            placeholder="Enter your name"
            value={uploadedBy}
            onChange={(e) => setUploadedBy(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="file"
            accept="*/*"
            onChange={handleFileChange}
            required
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {preview && (
            <div className="mt-4">
              {file?.type?.startsWith("image") ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full rounded-lg border"
                />
              ) : file?.type?.startsWith("video") ? (
                <video controls className="w-full rounded-lg border">
                  <source src={preview} type={file.type} />
                </video>
              ) : (
                <p className="text-sm text-gray-600">
                  File selected: {file.name}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className={`w-full py-2 text-white rounded-lg transition duration-200 ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserContentUpload;
