import React from 'react';
import './index.css';

const NewsCard = ({ article }) => {
  const { title, description, urlToImage, url, image } = article;

  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="news-link">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;