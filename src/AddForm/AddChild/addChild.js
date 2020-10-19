import React from "react";
import Context from "../../Context/context.js";
import TokenService from "../../services/token-service";

// function addChildRequest(name, callback) {
//   let id = function () {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return "_" + Math.random().toString(36).substr(2, 9);
//   };

//   fetch("https://stark-tor-49670.herokuapp.com/api/children", {
//     method: "POST",
//     headers: new Headers({
//       authorization: `bearer ${TokenService.getAuthToken()}`,
//       "content-type": "application/json",
//     }),
//     body: JSON.stringify({
//       user_id: 1,
//       name: name.value,
//     }),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         // get the error message from the response,
//         return res.json().then((error) => {
//           // then throw it
//           throw error;
//         });
//       }
//       return res.json();
//     })
//     .then((data) => {
//       //console.log({ data, callback });
//       callback(name);
//     })
//     .catch((error) => {
//       //console.log(error);
//     });
// }
export default class AddChild extends React.Component {
  static contextType = Context;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: { value: "" },
  //     newChild: "",
  //   };
  // }

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

  // updateChild(name) {
  //   if (name !== "") {
  //     this.setState({
  //       newChild: { ...this.context.newChild, name: name },
  //     });
  //   }
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const { childName } = this.state;

  //   addChildRequest(childName, this.context.addChild);
  // }

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
            onChange={(e) => this.context.setNewChild(e)}
            required
          ></input>
          <input type="submit" value="Add" aria-label="Add Child" />
        </form>
      </div>
    );
  }
}
