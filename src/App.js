import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./contexts/NewsContext";
import NewsContentPage from "./pages/NewsContentPage";
import StarterPage from "./pages/StarterPage";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route
            path="/news"
            element={
              <NewsProvider>
                <NewsContentPage />
              </NewsProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
