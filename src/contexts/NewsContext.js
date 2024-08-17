import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import config from "../config/config";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const APIKEY = process.env.REACT_APP_API_KEY;

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [clearingFilters, setClearingFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [preferences, setPreferences] = useState({
    sources: ["BBC News"], // Default to "BBC News" if no sources are selected
    categories: "",
    authors: "",
  });

  const [filters, setFilters] = useState({
    from: "",
    to: "",
    // category: "",
    // source: [],
  });

  const fetchNewsArticles = useCallback(
    async (params = {}, reset = false) => {
      setLoading(true);

      const currentPage = reset ? 1 : page;

      const selectedSourceIdentifiers = config.sources
        .filter((source) => preferences.sources.includes(source.name))
        .map((source) => source.identifier)
        .join(",");

      if (selectedSourceIdentifiers.length === 0) {
        console.error("No sources selected.");
        setLoading(false);
        return;
      }

      const url = `${baseURL}?apiKey=${APIKEY}&sources=${selectedSourceIdentifiers}&page=${currentPage}`;

      try {
        const response = await axios.get(url, {
          params: {
            ...params,
            from: filters.from,
            to: filters.to,
            pageSize: 20,
            // authors: preferences.authors,
            // category:
            //   filters.category.toLowerCase() ||
            //   preferences.categories.toLowerCase(),
          },
        });

        const fetchedArticles = response.data.articles;
        const totalResults = response.data.totalResults;

        if (reset) {
          setArticles(fetchedArticles);
          setPage(2); // Set to the next page after reset
        } else {
          setArticles((prevArticles) => [...prevArticles, ...fetchedArticles]);
          setPage((prevPage) => prevPage + 1);
        }

        const articlesFetchedSoFar =
          (currentPage - 1) * 20 + fetchedArticles.length;
        if (articlesFetchedSoFar >= totalResults) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Error fetching news articles:", error);
        setHasMore(false); // Consider no more articles if there's an error
      } finally {
        setLoading(false);
      }
    },
    [filters, page, preferences]
  );

  const resetAndFetchArticles = useCallback(
    (params = {}) => {
      setArticles([]);
      setPage(1);
      setHasMore(true);
      fetchNewsArticles(params, true);
    },
    [fetchNewsArticles]
  );

  const clearFilters = () => {
    setClearingFilters(true);
    setFilters({
      from: "",
      to: "",
      category: "",
      source: "",
    });
  };

  useEffect(() => {
    if (
      clearingFilters &&
      filters.from === "" &&
      filters.to === "" &&
      filters.category === "" &&
      filters.source === ""
    ) {
      setClearingFilters(false);
      resetAndFetchArticles();
    }
  }, [filters]);

  useEffect(() => {
    resetAndFetchArticles();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        articles,
        fetchNewsArticles,
        hasMore,
        loading,
        setPreferences,
        preferences,
        resetAndFetchArticles,
        setPage,
        clearFilters,
        filters,
        setFilters,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider, NewsContext };
