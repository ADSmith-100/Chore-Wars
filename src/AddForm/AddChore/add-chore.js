import React from "react";
import Context from "../../Context/context.js";
import TokenService from "../../services/token-service";

function addChoreRequest(child_id, title, callback) {
  fetch("https://stark-tor-49670.herokuapp.com/api/chores", {
    method: "POST",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      user_id: 1,
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
  constructor(props) {
    super(props);
    this.state = {
      child_id: null,
      title: "",
    };
  }

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
    addChoreRequest(child_id, title, this.context.addChore);
    event.target.reset();
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
