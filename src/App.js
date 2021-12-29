import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <News
                key="general"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={20}
                apikey={apikey}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
