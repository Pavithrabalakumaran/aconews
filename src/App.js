import React, { useState, useEffect } from 'react';
import Header from './Header';
import NewsList from './NewsList';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  const fetchNews = async (searchQuery = '') => {
    const API_KEY = '84619a9d374ff467a684e3895e998a8f';
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${searchQuery}&token=${API_KEY}`
    );
    const data = await response.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    fetchNews(searchTerm);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <NewsList articles={articles} />
      <Footer />
    </div>
  );
};

export default App;