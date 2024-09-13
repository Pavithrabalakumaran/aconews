import React, { useState, useEffect } from 'react';
import Header from './Header';
import NewsList from './NewsList';
import Footer from './Footer';
import './App.css';
import debounce from 'lodash.debounce'; 

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');

  const fetchNews = async (searchQuery = 'latest', page = 1, limit = 10) => {
    const API_KEY = '84619a9d374ff467a684e3895e998a8f';
    const REACT_APP_API_URL= "https://news-api-g2dn26i4g-pavithra-sri-bhavani-ccs-projects.vercel.app"

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/getNews?query=${query}&page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data.success) {
          console.log(data.data); 
          console.log(data.pagination); 
      }
  } catch (error) {
      console.error("Error fetching news:", error);
  }

    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${searchQuery}&token=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  const handleSearch = debounce((searchTerm) => {
    setQuery(searchTerm);
    fetchNews(searchTerm);
  }, 500); 

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <NewsList articles={articles} />
      <Footer />
    </div>
  );
};

export default App;

