import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Quotes from "../components/Quotes";
import QuoteInfo from "../components/QuoteInfo";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/quotes/new" element={<QuoteInfo />} />
    </Routes>
  </Router>
);
