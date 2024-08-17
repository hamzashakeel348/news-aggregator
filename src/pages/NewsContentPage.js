import React, { useContext } from "react";

import Navbar from "../components/Navbar";
import ArticleList from "../components/Article/ArticleList";

import { NewsContext } from "../contexts/NewsContext";

const NewsContentPage = () => {
  const {
    articles,
    resetAndFetchArticles,
    fetchNewsArticles,
    hasMore,
  } = useContext(NewsContext);

  const handleSearch = (query) => {
    resetAndFetchArticles({ q: query });
  };

  
  return (
    <div className="p-4">
      <Navbar onSearch={handleSearch} />
      <ArticleList
        articles={articles}
        fetchMoreArticles={fetchNewsArticles}
        hasMore={hasMore}
      />
    </div>
  );
};

export default NewsContentPage;
