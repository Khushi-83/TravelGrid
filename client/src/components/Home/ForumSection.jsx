import React from "react";
import { useNavigate } from "react-router-dom";

const topics = [
  {
    title: "Best travel hacks for solo travelers",
    replies: 23,
    tag: "Tips & Tricks",
    tagColor: "from-green-400 to-blue-500"
  },
  {
    title: "How to plan a budget-friendly trip to Leh",
    replies: 15,
    tag: "Destinations",
    tagColor: "from-pink-400 to-purple-500"
  },
  {
    title: "Top 5 underrated places in South India",
    replies: 9,
    tag: "Hidden Gems",
    tagColor: "from-yellow-400 to-red-500"
  }
];

const ForumSection = () => {
  const navigate = useNavigate();

  const handleVisitForum = () => {
    navigate('/forums');
  };

  const handleTopicClick = () => {
    navigate('/forums');
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 to-pink-50 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
        Join the Conversation
      </h2>
      <p className="text-gray-700 text-base md:text-lg mb-12 px-4 max-w-2xl mx-auto">
        Connect with fellow travelers, ask questions, and share your experiences in our buzzing travel community!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-left">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4 hover:scale-[1.02] hover:shadow-xl transition duration-300 ease-in-out relative cursor-pointer"
            onClick={handleTopicClick}
          >
            <div
              className={`absolute -top-4 left-4 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${topic.tagColor} shadow`}
            >
              {topic.tag}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              {topic.title}
            </h3>
            <p className="text-sm text-gray-600">{topic.replies} replies</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button
          onClick={handleVisitForum}
          className="py-3 px-8 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
        >
          Visit Forum
        </button>
      </div>
    </section>
  );
};

export default ForumSection;