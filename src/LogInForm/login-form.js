import React, { Component } from "react";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import Context from "../Context/context";
import Nav from "../Nav/nav";

export default class LoginForm extends Component {
  static contextType = Context;

  //   static defaultProps = {
  //     onLoginSuccess: () => {},
  //   };

  //   state = { error: null };

  //   handleSubmitBasicAuth = (ev) => {
  //     ev.preventDefault();
  //     const { email, password } = ev.target;

  //     TokenService.saveAuthToken(
  //       TokenService.makeBasicAuthToken(email.value, password.value)
  //     );

  //     email.value = "";
  //     password.value = "";
  //     this.props.onLoginSuccess();
  //   };

  //   handleSubmitJwtAuth = (ev) => {
  //     ev.preventDefault();
  //     this.setState({ error: null });
  //     const { email, password } = ev.target;

  //     AuthApiService.postLogin({
  //       email: email.value,
  //       password: password.value,
  //     })
  //       .then((res) => {
  //         email.value = "";
  //         password.value = "";
  //         TokenService.saveAuthToken(res.authToken);
  //         this.props.onLoginSuccess();
  //       })
  //       .catch((res) => {
  //         this.setState({ error: res.error });
  //       });
  //   };

  submitForm = (e) => {
    e.preventDefault();
    alert("Feature coming soon! Please try the demo");
    // let email = e.target.email.value;
    // let password = e.target.password.value;
    // this.context.loginUser(email, password);
  };

  render() {
    // const { error } = this.state;
    return (
      <div>
        <Nav />
        <form className="LoginForm" onSubmit={(e) => this.submitForm(e)}>
          {/* <div role="alert">{error && <p className="red">{error}</p>}</div> */}
          <div className="email">
            <label htmlFor="LoginForm__email">Email</label>
            <input name="email" type="email" id="LoginForm__email"></input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <input
              name="password"
              type="password"
              id="LoginForm__password"
            ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
