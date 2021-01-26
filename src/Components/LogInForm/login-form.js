import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import Context from "../../Context/context";

export default class LoginForm extends Component {
  static contextType = Context;

  //   static defaultProps = {
  //     onLoginSuccess: () => {},
  //   };

  state = { error: null };

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

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push("/chore-list");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <form
          className="LoginForm"
          onSubmit={(e) => this.handleSubmitJwtAuth(e)}
        >
          <div>
            <p>
              <h4>Demo Credentials</h4>
            </p>
            <p>
              <strong>email:</strong>
              demo@demo.com
            </p>
            <p>
              <strong>password:</strong>
              11AAaa!!
            </p>
          </div>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="email">
            <label htmlFor="LoginForm__email">Email</label>
            <input
              value="demo@demo.com"
              name="email"
              type="email"
              id="LoginForm__email"
            ></input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <input
              value="11AAaa!!"
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
