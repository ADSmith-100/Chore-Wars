import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
  comingSoon = () => {
    alert("Feature Coming Soon!");
  };
  render() {
    return (
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
              <Link to="/sign-up-form">SignUp</Link>
            </li>
            <li>
              <Link to="/login-form">LogIn</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
