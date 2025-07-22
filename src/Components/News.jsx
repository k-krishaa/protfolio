import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const NewsApp = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setArticles([]);

    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      setArticles(res.data.articles);
    } catch (err) {
      setError("Failed to fetch news. Please check your API key or query.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchNews();
    }
  };

  return (
    <div className="min-h-screen bg-rose-300 px-4 py-8 flex flex-col items-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-6">📰 News App</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search news (e.g., AI, sports, Nepal)"
            className="flex-1 border border-gray-300 p-2 rounded"
          />
          <button
            onClick={fetchNews}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="border p-4 rounded bg-white shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-600">
                  {article.source.name} | {new Date(article.publishedAt).toLocaleString()}
                </p>
                <p className="mt-2">{article.description}</p>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="news"
                    className="mt-2 w-full h-48 object-cover rounded"
                  />
                )}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsApp;

