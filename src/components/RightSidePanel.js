import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { DateTime } from "luxon";

const RightSidePanel = () => {
  const [userContent, setUserContent] = useState([]);
  const [news, setNews] = useState([]);

  const userContentRef = useRef(null);
  const newsRef = useRef(null);

  // OPTIONAL: You can re-enable this block if you want to show user uploads.
  // useEffect(() => {
  //   const fetchUserContent = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:9090/api/upload/all-content");
  //       setUserContent(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user content:", error);
  //     }
  //   };
  //   fetchUserContent();
  // }, []);

  useEffect(() => {
    const fetchHealthNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=menstrual%20health&apiKey=f12d4c76b52748d9a51079701b97d49a"
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching health news:", error);
      }
    };

    fetchHealthNews();
  }, []);

  useEffect(() => {
    if (userContentRef.current) userContentRef.current.scrollTop = 0;
  }, [userContent]);

  useEffect(() => {
    if (newsRef.current) newsRef.current.scrollTop = 0;
  }, [news]);

  const formatDate = (dateInput) => {
    try {
      let dateTime;
      if (Array.isArray(dateInput)) {
        dateTime = DateTime.fromObject({
          year: dateInput[0],
          month: dateInput[1],
          day: dateInput[2],
          hour: dateInput[3],
          minute: dateInput[4],
          second: dateInput[5],
          millisecond: Math.floor(dateInput[6] / 1000000),
        });
      } else {
        dateTime = DateTime.fromISO(dateInput);
      }

      return dateTime.isValid
        ? dateTime.toFormat("dd MMMM yyyy, hh:mm a")
        : "Invalid Date";
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 max-h-[83vh] overflow-hidden shadow-lg bg-gradient-to-br from-[#0e08099d] to-[#ffc3a0]">
      {/* Uncomment to show user content */}
      {/* 
      <div
        className="flex-1 p-4 bg-gradient-to-br from-[#dbd4f9] to-[#f13603] overflow-y-auto shadow-md rounded-lg"
        ref={userContentRef}
      >
        <h3 className="sticky top-0 z-10 bg-inherit text-center font-bold text-black py-2 text-lg">
          📝 User Contributions
        </h3>
        {userContent.length === 0 ? (
          <p className="text-gray-700">No content available yet.</p>
        ) : (
          userContent.map((item) => (
            <div
              key={item.id}
              className="mb-4 p-3 rounded-lg bg-white/85 transition-transform duration-300 ease-in-out hover:scale-[1.03] animate-fade-in"
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p>{item.description}</p>
              <small className="block text-sm text-gray-600 mt-1">📄 {item.fileType}</small>
              <small className="block text-sm text-gray-600">📂 {item.filePath}</small>
              <small className="block text-sm text-gray-600">📅 {formatDate(item.uploadTime)}</small>
              <small className="block text-sm text-gray-600">👤 {item.uploadedBy}</small>
            </div>
          ))
        )}
      </div>
      */}

      {/* Women's Health News Section */}
      <div
        className="flex-1 p-4 bg-gradient-to-br from-[#c5eed4] to-[#9005f3] overflow-y-auto shadow-md rounded-lg"
        ref={newsRef}
      >
        <h3 className="sticky top-0 z-10 bg-inherit text-center font-bold text-black py-2 text-lg">
          📰 Women's Health News
        </h3>
        {news.length === 0 ? (
          <p className="text-gray-700">No recent news available.</p>
        ) : (
          news.map((article, index) => (
            <div
              key={index}
              className="mb-4 p-3 rounded-lg bg-white/85 transition-transform duration-300 ease-in-out hover:scale-[1.03] animate-fade-in"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 font-semibold hover:underline"
              >
                <h4>{article.title}</h4>
              </a>
              <p className="text-sm text-gray-700">{article.description}</p>
              <small className="block text-sm text-gray-600 mt-1">
                🗓️ {formatDate(article.publishedAt)}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RightSidePanel;
