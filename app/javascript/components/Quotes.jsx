import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Quotes = () => {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/quotes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setQuotes(res))
      .catch(() => navigate("/"));
  }, []);
};

export default Quotes;
