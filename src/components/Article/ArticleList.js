import React, { useContext } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import CircularProgress from "@mui/material/CircularProgress";

import { NewsContext } from "../../contexts/NewsContext";

import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const { articles, fetchNewsArticles, hasMore } =
    useContext(NewsContext);

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchNewsArticles}
      hasMore={hasMore}
      loader={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>
            {articles.length > 0
              ? "You have seen all the articles!"
              : "No articles found!"}
          </b>
        </p>
      }
    >
      <div className="articles-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ArticlesList;
