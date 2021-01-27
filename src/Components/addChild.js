import React from "react";
import Context from "../Context/context";
import TokenService from "../services/token-service";
import decodeJwt from "jwt-decode";

function addChildRequest(name, userId, callback) {
  fetch("https://stark-tor-49670.herokuapp.com/api/children", {
    method: "POST",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId.value,
      name: name.value,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        // get the error message from the response,
        return res.json().then((error) => {
          // then throw it
          throw error;
        });
      }
      return res.json();
    })
    .then((data) => {
      //console.log({ data, callback });
      callback(name);
    })
    .catch((error) => {
      //console.log(error);
    });
}

export default class AddChild extends React.Component {
  static contextType = Context;

  state = {
    childName: { value: "" },
    user_id: { value: "" },
  };

  // addChild = (e) => {
  //   e.preventDefault();
  //   if (this.context.newChild !== "") {
  //     const newChild = {
  //       id: this.context.children.length + 1,
  //       name: this.context.newChild.name,
  //     };
  //     this.setState({ children: [...this.state.children, newChild] });
  //     this.setState({ newChild: "" });
  //     e.target.reset();
  //   }
  // };

  updateChild(name) {
    if (name !== "") {
      this.setState({
        childName: { value: name },
      });
      this.getCurrentUser();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { childName } = this.state;
    const userId = this.state.user_id;
    addChildRequest(childName, userId, this.context.addChild);
    event.target.reset();
  }

  getCurrentUser() {
    const user = decodeJwt(
      sessionStorage.getItem("chore-wars-client-auth-token")
    );
    this.setState({ user_id: { value: user.user_id } });
    console.log(user);
  }

  render() {
    return (
      <div>
        <h2>Add Child</h2>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            className="newPerson"
            type="text"
            name="name"
            // value={this.context.newChild}
            placeholder="New Child Name"
            aria-label="New Person Name"
            onChange={(e) => this.updateChild(e.target.value)}
            required
          ></input>
          <input type="submit" value="Add" aria-label="Add Child" />
        </form>
      </div>
    );
  }
}
