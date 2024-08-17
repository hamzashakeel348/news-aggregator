import React from "react";

import { formattedDate } from "../../utils/utils";

const ArticleCard = ({ article }) => {

  return (
    <div className="article-card bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 text-sm mb-2">{article.description}</p>
        <p className="text-gray-500 text-xs mb-4">{formattedDate(article.publishedAt)}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
