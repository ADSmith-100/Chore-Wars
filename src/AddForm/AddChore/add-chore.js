import React from "react";
import Context from "../../Context/context.js";

function addChoreRequest(chore, callback) {
  let id = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  callback(this.state.addChore(chore));
}

export default class AddChore extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user_id: "",
      child_id: "",
      title: "",
      status: "",
    };
  }

  updateChoreTitle(name) {
    this.setState({
      choreTitle: { value: name },
    });
  }

  updateChoreChildId(childId, choreId) {
    if (childId) {
      let result = this.state.children.filter((obj) => {
        return obj.name === childId;
      });
      let myChoreId = this.state.chores.filter((obj) => {
        return obj.id === choreId;
      });
      this.setState({
        newChore: {
          ...this.state.newChore,
          child_id: result[0].id,
          id: myChoreId[0].id,
        },
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { child_id, title } = this.state;

    addChoreRequest(child_id, title, this.context.addChore);
  }

  render() {
    let ChildArray = [];
    for (let o in this.state.children) {
      ChildArray.push(this.state.children[o].name);
    }
    return (
      <form onSubmit={(e) => this.addChore(e)}>
        <input
          className="newChore"
          type="text"
          name="chore"
          // value={this.state.newChore.title || ""}
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
          // defaultValue=""
        >
          <option value="none">None</option>
          {ChildArray.map((child) => (
            <option
              {...child}
              key={child.id}
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
