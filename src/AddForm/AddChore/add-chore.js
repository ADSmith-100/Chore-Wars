import React from "react";
import Context from "../../Context/context.js";
import TokenService from "../../services/token-service";
import decodeJwt from "jwt-decode";

function addChoreRequest(child_id, title, userId, callback) {
  fetch("https://stark-tor-49670.herokuapp.com/api/chores", {
    method: "POST",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId.value,
      child_id: child_id,
      title: title,
      status: false,
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
      callback(title);

      //alert("Your note was saved!");
    })

    .catch((error) => {
      //console.log(error);
    });
}

export default class AddChore extends React.Component {
  static contextType = Context;

  state = {
    child_id: "",
    title: "",
    user_id: { value: "" },
  };

  // updateChoreTitle(name) {
  //   this.setState({
  //     choreTitle: { value: name },
  //   });
  // }

  updateChildId(childId) {
    let result = this.context.children.filter((obj) => {
      return obj.name === childId;
    });

    this.setState({
      child_id: result[0].id,
    });
  }

  updateChoreTitle(chore) {
    if (chore !== "") {
      this.setState({ title: chore });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { child_id, title } = this.state;
    const userId = this.state.user_id;
    addChoreRequest(child_id, title, userId, this.context.addChore);
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
    let ChildArray = [];
    for (let o in this.context.children) {
      ChildArray.push(this.context.children[o].name);
    }
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          className="newChore"
          type="text"
          name="title"
          // value={this.context.newChore.title}
          placeholder="New Chore Name"
          aria-label="New Chore Name"
          onChange={(e) => this.updateChoreTitle(e.target.value)}
          required
        ></input>

        <select
          className="dropDown"
          name="childId"
          id="childId"
          aria-label="New Chore Child Selection"
          onChange={(e) => this.updateChildId(e.target.value)}
        >
          <option value="none">None</option>
          {ChildArray.map((child, index) => (
            <option
              key={index}
              value={child.id}
              name={child.name}
              text={child.name}
            >
              {child}
            </option>
          ))}
          ;
        </select>
        <input type="submit" value="Add" aria-label="Add Chore" />
      </form>
    );
  }
}
