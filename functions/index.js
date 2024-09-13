const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
admin.initializeApp();

const GNEWS_API_KEY = "84619a9d374ff467a684e3895e998a8f";
const GNEWS_API_URL = "https://gnews.io/api/v4/search";

exports.getNews = functions.https.onRequest(async (req, res) => {
  const {query, page = 1, limit = 10} = req.query;
  try {
    const apiUrl = `${GNEWS_API_URL}?q=${encodeURIComponent(query)}&page=${page}
    &max=${limit}&token=${GNEWS_API_KEY}&lang=en`;
    const response = await axios.get(apiUrl);
    const articles = response.data.articles;

    res.status(200).json({
      success: true,
      data: articles,
      pagination: {
        page,
        limit,
        totalArticles: response.data.totalArticles,
      },
    });
  } catch (error) {
    console.error("Error fetching news articles:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching news articles",
      error: error.message,
    });
  }
});


exports.paginateNews = functions.https.onRequest(async (req, res) => {
  const {query, page = 1, limit = 10} = req.query;

  try {
    const apiUrl = `${GNEWS_API_URL}?q=${encodeURIComponent(query)}&
    page=${page}&max=${limit}&token=${GNEWS_API_KEY}&lang=en`;
    const response = await axios.get(apiUrl);
    const articles = response.data.articles;

    res.status(200).json({
      success: true,
      data: articles,
      pagination: {
        page,
        limit,
        totalArticles: response.data.totalArticles,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching paginated articles",
      error: error.message,
    });
  }
});

