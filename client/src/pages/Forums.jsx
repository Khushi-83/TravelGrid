// 2. Updated Forums.jsx - Replace with the full forums page
import React, { useState } from 'react';

import { MessageCircle, Users, Clock, Search, Filter, Plus, Heart, Reply, Share2, Bookmark, ArrowLeft, Home } from 'lucide-react';

const Forums = () => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const categories = [
    { id: 'all', name: 'All Topics', count: 47, color: 'from-gray-400 to-gray-600' },
    { id: 'tips', name: 'Tips & Tricks', count: 23, color: 'from-green-400 to-blue-500' },
    { id: 'destinations', name: 'Destinations', count: 15, color: 'from-pink-400 to-purple-500' },
    { id: 'hidden', name: 'Hidden Gems', count: 9, color: 'from-yellow-400 to-red-500' },
    { id: 'budget', name: 'Budget Travel', count: 12, color: 'from-teal-400 to-cyan-500' },
    { id: 'photography', name: 'Travel Photography', count: 8, color: 'from-indigo-400 to-purple-600' }
  ];

  const forumTopics = [
    {
      id: 1,
      title: "Best travel hacks for solo travelers",
      author: "WanderlustSarah",
      authorAvatar: "S",
      category: "tips",
      replies: 23,
      views: 156,
      lastActivity: "2 hours ago",
      isPinned: true,
      isHot: true,
      preview: "Just got back from a 3-month solo trip across Southeast Asia and wanted to share some game-changing tips...",
      likes: 45,
      tags: ["solo-travel", "backpacking", "safety"]
    },
    {
      id: 2,
      title: "How to plan a budget-friendly trip to Leh",
      author: "MountainExplorer",
      authorAvatar: "M",
      category: "destinations",
      replies: 15,
      views: 89,
      lastActivity: "4 hours ago",
      isPinned: false,
      isHot: false,
      preview: "Planning a trip to Leh on a shoestring budget? Here's everything you need to know about...",
      likes: 32,
      tags: ["leh", "budget", "himalayas"]
    },
    {
      id: 3,
      title: "Top 5 underrated places in South India",
      author: "SouthernNomad",
      authorAvatar: "N",
      category: "hidden",
      replies: 9,
      views: 67,
      lastActivity: "6 hours ago",
      isPinned: false,
      isHot: true,
      preview: "Tired of the same old tourist spots? Let me take you on a journey to some incredible hidden gems...",
      likes: 28,
      tags: ["south-india", "offbeat", "culture"]
    },
    {
      id: 4,
      title: "Capturing the perfect sunrise shot in Rajasthan",
      author: "PhotoVoyager",
      authorAvatar: "P",
      category: "photography",
      replies: 18,
      views: 134,
      lastActivity: "8 hours ago",
      isPinned: false,
      isHot: false,
      preview: "After years of chasing sunrises across Rajasthan, here are my top techniques and locations...",
      likes: 52,
      tags: ["photography", "rajasthan", "sunrise"]
    },
    {
      id: 5,
      title: "₹10,000 challenge: Complete North India circuit",
      author: "BudgetBackpacker",
      authorAvatar: "B",
      category: "budget",
      replies: 31,
      views: 203,
      lastActivity: "12 hours ago",
      isPinned: false,
      isHot: true,
      preview: "Proving that you can explore North India's golden triangle and more with just ₹10,000...",
      likes: 67,
      tags: ["budget", "north-india", "challenge"]
    },
    {
      id: 6,
      title: "Monsoon travel in Kerala - Yay or Nay?",
      author: "KeralaDreamer",
      authorAvatar: "K",
      category: "destinations",
      replies: 12,
      views: 78,
      lastActivity: "1 day ago",
      isPinned: false,
      isHot: false,
      preview: "Thinking of visiting God's own country during monsoon season? Here's what you need to consider...",
      likes: 19,
      tags: ["kerala", "monsoon", "weather"]
    }
  ];

  const filteredTopics = forumTopics.filter(topic => {
    const matchesCategory = activeCategory === 'all' || topic.category === activeCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedTopics = [...filteredTopics].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes;
      case 'replies':
        return b.replies - a.replies;
      case 'views':
        return b.views - a.views;
      default: // recent
        return a.id - b.id;
    }
  });

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-400 to-gray-600';
  };

  return (
  
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          <Home className="h-4 w-4" />
          <span>Back</span>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Categories */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition duration-200 ${
                    activeCategory === category.id 
                      ? 'bg-gradient-to-r text-white shadow-md' + ` ${category.color}`
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id 
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Forum Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">2,547</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">1,247</div>
                  <div className="text-sm text-gray-600">Total Topics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search topics, tags, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="replies">Most Replies</option>
                  <option value="views">Most Views</option>
                </select>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                  <Filter size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Topics List */}
          <div className="space-y-4">
            {sortedTopics.map(topic => (
              <div key={topic.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {topic.authorAvatar}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {topic.isPinned && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                                Pinned
                              </span>
                            )}
                            {topic.isHot && (
                              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
                                Hot
                              </span>
                            )}
                            <span className={`text-xs text-white px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(topic.category)}`}>
                              {categories.find(cat => cat.id === topic.category)?.name}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-2">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {topic.preview}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {topic.tags.map(tag => (
                              <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-800 cursor-pointer transition duration-200">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>by <span className="font-medium text-blue-600 hover:underline cursor-pointer">{topic.author}</span></span>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{topic.lastActivity}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Heart size={14} />
                              <span>{topic.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle size={14} />
                              <span>{topic.replies}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users size={14} />
                              <span>{topic.views}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
                              <Bookmark size={16} className="text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
                              <Share2 size={16} className="text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-blue-100 text-blue-600 rounded-full transition duration-200">
                              <Reply size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full hover:scale-105 transition duration-300 shadow-lg">
              Load More Topics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;