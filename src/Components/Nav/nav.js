import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import "./nav.css";

export default class Nav extends Component {
  comingSoon = () => {
    alert("Feature Coming Soon!");
  };
  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="Nav">
        <div className="NavLinks">
          <h1>
            <Link to="/">ChoreWars</Link>
          </h1>

          <ul className="menu">
            {TokenService.hasAuthToken() ? (
              <>
                <li>
                  <Link to="/chore-list">Dashboard</Link>
                </li>
                <li>
                  <a href="/logout" onClick={(e) => this.logout(e)}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/sign-up-form">SignUp</Link>
                </li>
                <li>
                  <Link to="/login-form">LogIn</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
