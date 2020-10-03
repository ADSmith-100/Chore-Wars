import React from "react";
import "./chore-list.css";

let id = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.

  return "_" + Math.random().toString(36).substr(2, 9);
};

export default class ChoreList extends React.Component {
  state = {
    newChore: "",
    //   id: null,
    //   title: "",
    //   child_id: null,
    //   status: false,
    //   comments: "",
    // },
    newChild: "",
    children: [
      { id: 1, name: "Larry" },
      { id: 2, name: "Curly" },
      { id: 3, name: "Moe" },
    ],
    chores: [
      {
        id: 1,
        title: "Mop",
        child_id: 2,
        status: false,
        comments: "",
      },
      {
        id: 2,
        title: "Vacuum",
        child_id: 2,
        status: true,
        comments: "Good I guess",
      },
      {
        id: 3,
        title: "Dust",
        child_id: 2,
        status: true,
        comments: "",
      },
      {
        id: 4,
        title: "Feed the chickens",
        child_id: 1,
        status: true,
        comments: "Nice work",
      },
      {
        id: 5,
        title: "Trash",
        child_id: 1,
        status: false,
        comments: "",
      },
      {
        id: 6,
        title: "Mow the grass",
        child_id: 1,
        status: false,
        comments: "",
      },
      {
        id: 7,
        title: "Polish silver",
        child_id: 3,
        status: true,
        comments: "",
      },
      {
        id: 8,
        title: "Empty cat box",
        child_id: 3,
        status: false,
        comments: "",
      },
      {
        id: 9,
        title: "Paint the chicken coop",
        child_id: 3,
        status: true,
        comments: "",
      },
    ],
  };

  updatePersonName(name) {
    if (name !== "") {
      this.setState({
        newChild: { ...this.state.newChild, name: name },
      });
    }
  }

  addChild = (e) => {
    e.preventDefault();
    if (this.state.newChild !== "") {
      const newChild = {
        id: this.state.children.length + 1,
        name: this.state.newChild.name,
      };
      this.setState({ children: [...this.state.children, newChild] });
      this.setState({ newChild: "" });
      e.target.reset();
    }
  };

  updateChoreTitle(name) {
    if (name !== "") {
      this.setState({
        newChore: { ...this.state.newChore, title: name },
      });
    }
  }

  updateChildId(childId) {
    let result = this.state.children.filter((obj) => {
      return obj.name === childId;
    });

    this.setState({
      newChore: { ...this.state.newChore, child_id: result[0].id },
    });
  }

  addChore = (e) => {
    e.preventDefault();
    if (this.state.newChore !== "") {
      const newChore = {
        id: this.state.chores.length + 1,
        title: this.state.newChore.title,
        child_id: this.state.newChore.child_id || null,
        status: false,
        comments: "",
      };
      this.setState({ chores: [...this.state.chores, newChore] });
      this.setState({ newChore: "" });
      e.target.reset();
    }
  };

  toggleCompleted = (choreId) => {
    let chores = this.state.chores.map((chore) => {
      if (chore.id === choreId) {
        chore.status = !chore.status;
      }
      return chore;
    });
    this.setState({ chores });
  };

  render() {
    let ChildArray = [];
    for (let o in this.state.children) {
      ChildArray.push(this.state.children[o].name);
    }
    return (
      <div className="App">
        <form onSubmit={(e) => this.addChore(e)}>
          <input
            className="newChore"
            type="text"
            name="chore"
            value={this.state.newChore.title || ""}
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
        <p>
          <form onSubmit={(e) => this.addChild(e)}>
            <input
              className="newPerson"
              type="text"
              name="person"
              value={this.state.newChild.name}
              placeholder="New Person Name"
              aria-label="New Person Name"
              onChange={(e) => this.updatePersonName(e.target.value)}
              required
            ></input>
            <input type="submit" value="Add" aria-label="Add Child" />
          </form>
        </p>

        <h1>The Jones Household</h1>
        <h2>Chore List for 10/01/2020 - 10/8/2020</h2>
        <section className="children">
          {this.state.children.map((child) => (
            <div className="child">
              <h3>{child.name}</h3>
              <ul>
                {this.state.chores
                  .filter((c) => c.child_id === child.id)
                  .map((chore) => (
                    <li
                      className={`chore-completed-${chore.status}`}
                      onClick={() => this.toggleCompleted(chore.id)}
                    >
                      <span>{chore.title}</span>
                      {chore.comments !== "" ? (
                        <em title={chore.comments}>C</em>
                      ) : (
                        <em>+</em>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </section>
        <h2>Unassigned Chores</h2>
        <section className="unassigned_chores">
          <div className="chore">
            <ul>
              {this.state.chores
                .filter((c) => c.child_id === null)
                .map((chore) => (
                  <li className="un-chore">
                    <span>{chore.title}</span>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

//? why did I have to use e.target.reset()?  Is my controlled form messed up?
