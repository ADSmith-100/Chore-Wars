import React, { Component } from "react";
import Nav from "../Nav/nav.js";
import "./sign-up-form.css";

export default class SignUpForm extends Component {
  soon = () => {
    alert("Feature coming soon! Please try the demo");
  };
  render() {
    return (
      <div>
        <Nav />
        <form className="signup-form">
          <div>
            <label>First name</label>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button onClick={this.soon}>Sign Up</button>
        </form>
      </div>
    );
  }
}
