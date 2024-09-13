# Acowale News 📰

Acowale News is a sleek, responsive news application that fetches the latest news articles using the [gnews.io](https://gnews.io) API. This project is designed to showcase a mobile-first design approach with a powerful backend that handles pagination, search, and more. Hosted on Firebase, this app is an elegant, real-time solution for consuming news.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Process](#process)
- [Future Improvements](#future-improvements)

---

## Features
- 🌐 **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- 🔍 **Search Functionality**: Search news articles by keywords.
- 📄 **Pagination**: Efficiently handles pagination for large news data sets.
- 📰 **Live News Feed**: Fetches news articles in real-time using the GNews API.
- 🚀 **Hosted on Vercel**: Fast and reliable hosting.
Completed the front end but couldnt host it on firebase as it showed some payment terms like :


  [ ### Error: Your project aconews-9078d must be on the Blaze (pay-as-you-go) plan to complete this command. Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL:

https://console.firebase.google.com/project/aconews-9078d/usage/details ]

---

## Tech Stack
- **Frontend**: React, CSS
- **Backend**: Node.js (Hosted on Vercel)
- **API**: [gnews.io](https://gnews.io) for news articles
- **Hosting**: *Firebase (Frontend), Vercel (Backend)
- **Utilities**: Lodash (for debouncing search), Fetch API for HTTP requests

---

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone  https://github.com/Pavithrabalakumaran/aconews.git
cd aconews

Step 2: Install Dependencies
   Make sure you have Node.js installed, then run:
   npm install 

Step 3: Create a .env File
   Create a .env file in the root directory with the following environment variables:
   REACT_APP_API_KEY= 84619a9d374ff467a684e3895e998a8f
   REACT_APP_API_URL=https://news-api-g2dn26i4g-pavithra-sri-bhavani-ccs-projects.vercel.app
Get your GNews API key from gnews.io.
REACT_APP_API_URL should point to your backend hosted on Vercel (or a similar service).

Step 4: Run the App Locally:
npm start


Process
Getting the API Key: The first step was acquiring an API key from gnews.io to interact with their API and fetch news articles.
Frontend Development: Developed a responsive React-based UI with components such as Header, NewsList, and Footer. Integrated Lodash’s debounce feature for search to improve performance.
Backend Setup: Created a backend that handles API requests and pagination. Hosted the backend on Vercel, ensuring efficient and quick API response times.