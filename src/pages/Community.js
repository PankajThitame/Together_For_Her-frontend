import React, { useState, useEffect } from "react";
import axios from "axios";

const categories = [
  "Period Talk",
  "Mental Health & Support",
  "Ask the Expert",
  "Stories of Strength",
  "Awareness & Campaigns",
  "Tips & Advice",
  "Volunteer Connect",
];

const profanityList = ["badword1", "badword2"];

const Community = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleLike = async (id, index) => {
    try {
      await fetch(`http://localhost:9090/api/community/like/${id}`, { method: "PUT" });
      const updatedMessages = [...messages];
      updatedMessages[index].likes += 1;
      setMessages(updatedMessages);
    } catch (err) {
      console.error("Error liking the post:", err);
    }
  };

  const handlePost = async () => {
    if (!newMessage.trim()) return;
    const containsProfanity = profanityList.some((word) =>
      newMessage.toLowerCase().includes(word)
    );
    if (containsProfanity) {
      alert("Your post contains inappropriate content.");
      return;
    }

    const newPost = {
      text: newMessage,
      category: selectedCategory,
      timestamp: new Date().toLocaleString(),
      likes: 0,
    };

    try {
      const response = await axios.post("http://localhost:9090/api/community/post", newPost);
      const postWithId = { ...newPost, id: response.data.id };
      setMessages([postWithId, ...messages]);
      setNewMessage("");
    } catch (error) {
      console.error("Failed to post message:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/community/all");
        const data = response.data.map((item) => ({
          id: item.id,
          text: item.message,
          category: item.category,
          timestamp: item.timestamp,
          likes: item.likes,
        }));
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-pink-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">🌸 Community Forum</h2>

        <div className="bg-pink-50 border-2 border-dashed border-pink-300 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-pink-500 mb-2">📜 Forum Guidelines:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Be respectful and supportive.</li>
            <li>No hate speech or bullying.</li>
            <li>Use inclusive language.</li>
            <li>Avoid sharing personal information.</li>
            <li>Posts with inappropriate content will be removed.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <textarea
            className="w-full h-24 p-3 border border-gray-300 rounded-md resize-none mb-4 text-sm"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message here..."
          ></textarea>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto flex-1 p-2 border border-gray-300 rounded-md text-sm"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
            <button
              onClick={handlePost}
              className="px-4 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition"
            >
              Post
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {messages.length === 0 ? (
            <p className="text-center text-sm text-gray-500">No posts yet. Be the first to share!</p>
          ) : (
            messages.map((msg, index) => (
              <div key={msg.id} className="bg-white border-l-4 border-pink-500 rounded-md p-4 shadow">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span className="font-semibold text-pink-600">#{msg.category}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p className="text-sm text-gray-800 mb-2">{msg.text}</p>
                <button
                  onClick={() => handleLike(msg.id, index)}
                  className="text-pink-600 text-sm hover:underline"
                >
                  ❤️ {msg.likes}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;