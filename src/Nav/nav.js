import React, { Component } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { BrowserRouter, Route, NavLink, Link, Router } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
  comingSoon = () => {
    alert("Feature Coming Soon!");
  };
  render() {
    return (
      <Router>
        <div className="Nav">
          <div className="NavLinks">
            <h1>
              <Link to="/">ChoreWars</Link>
            </h1>

            <ul className="menu">
              <li>
                <Link to="/chore-list">Demo</Link>
              </li>
              <li>
                <Link to="/sign-up-form">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}
