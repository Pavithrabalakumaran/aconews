import React from 'react';
import NewsCard from "../NewsCard";
import './index.css';

const NewsList = ({ articles }) => {
  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;