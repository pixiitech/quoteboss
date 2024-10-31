import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// const navigate = useNavigate();

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: [], errorMessage: null };
  }

  componentDidMount() {
    const url = "/api/v1/projects"
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => { this.setState({ quotes: res }) })
      .catch((e) => { this.setState({ errorMessage: e.message }) });
  }

  renderQuotes() {
    const { quotes, errorMessage } = this.state;

    return quotes.map((quote, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="error">
          { errorMessage }
        </div>
        <div className="card mb-4">
          <span className="card-img-top">📋</span>
          <div className="card-body">
            <h5 className="card-title">{quote.title}</h5>
            <Link to={`/quote/${quote.id}`} className="btn custom-button">
              View Quote
            </Link>
          </div>
        </div>
      </div>
    ));
  }

  renderNoQuote() {
    return (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No quotes yet. Why not <Link to="/quotes/new">create one</Link>
        </h4>
      </div>
    );
  }

  render() {
    const { quotes } = this.state;

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Your projects</h1>
            <p className="lead text-muted">
              Quotes created by you
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-end mb-3">
              <Link to="/quotes/new" className="btn custom-button">
                Create New Quote
              </Link>
            </div>
            <div className="row">
              {quotes.length > 0 ? this.renderQuotes() : this.renderNoQuote() }
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
};

export default Quotes;
