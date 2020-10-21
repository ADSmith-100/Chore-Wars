import React from "react";
import Context from "../../Context/context.js";
import TokenService from "../../services/token-service";

function addChildRequest(name, callback) {
  fetch("https://stark-tor-49670.herokuapp.com/api/children", {
    method: "POST",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user_id: 1,
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
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      name: "",
    };
  }

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
        newChild: { ...this.context.newChild, name: name },
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { childName } = this.state;

    addChildRequest(childName, this.context.addChild);
  }

  render() {
    return (
      <div>
        <h2>Add Child</h2>

        <form onSubmit={(e) => this.context.addChild(e)}>
          <input
            className="newPerson"
            type="text"
            name="person"
            value={this.context.newChild}
            placeholder="New Child Name"
            aria-label="New Person Name"
            onChange={(e) => this.context.updateChild(e)}
            required
          ></input>
          <input type="submit" value="Add" aria-label="Add Child" />
        </form>
      </div>
    );
  }
}
