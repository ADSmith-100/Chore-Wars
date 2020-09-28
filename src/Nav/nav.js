import React, { Component } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Nav">
          <div className="NavLinks">
            <h1>
              <Link to="/">ChoreWars</Link>{" "}
            </h1>
            <ul className="menu">
              <li>
                <a className="navlink-minor" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a className="navlink-minor" href="#">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </BrowserRouter>
    );
  }
}
