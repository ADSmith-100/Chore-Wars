import React from "react";
import Context from "../../Context/context.js";

function addChildRequest(name, callback) {
  let id = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  callback(this.state.addChild(name));
}
//   fetch("https://fierce-harbor-17385.herokuapp.com/api/folders", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       id: id,
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
  constructor(props) {
    super(props);
    this.state = {
      childName: { value: "" },
    };
  }

  updateChild(name) {
    this.setState({
      childName: { value: name },
    });
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

        <form onSubmit={(e) => this.addChild(e)}>
          <input
            className="newPerson"
            type="text"
            name="person"
            value={this.state.childName.name}
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
