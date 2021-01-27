import React from "react";
import Context from "../Context/context";
import TokenService from "../services/token-service";

function reassignChoreRequest(childId, choreId, callback) {
  fetch(`https://stark-tor-49670.herokuapp.com/api/chores/${choreId}`, {
    method: "PATCH",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      child_id: childId,
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
      callback(childId);
    })
    .catch((error) => {
      //console.log(error);
    });
}

export default class UnassignedChoreList extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      child_id: "",
      id: "",
    };
  }

  // reassignChore(e) {
  //   e.preventDefault();

  //   let chores = this.context.chores.map((chore) => {
  //     if (chore.id === this.state.newChore.id) {
  //       chore.child_id = this.state.newChore.child_id;
  //     }
  //     return chore;
  //   });
  //   this.setState({ chores });
  //   e.target.reset();
  // }

  updateChoreChildId(childId, choreId) {
    if (childId) {
      let result = this.context.children.filter((obj) => {
        return obj.name === childId;
      });
      let myChoreId = this.context.chores.filter((obj) => {
        return obj.id === choreId;
      });
      this.setState({
        child_id: result[0].id,
        id: myChoreId[0].id,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const choreId = this.state.id;
    const childId = this.state.child_id;
    // const userId = this.state.user_id;
    reassignChoreRequest(choreId, childId, this.context.updateChore);
    event.target.reset();
  }

  render() {
    let ChildArray = [];
    for (let o in this.context.children) {
      ChildArray.push(this.context.children[o].name);
    }
    const { chores = [] } = this.context || [];
    return (
      <div>
        <h2>Unassigned Chores</h2>
        <section className="unassigned-chores">
          {chores
            .filter((c) => c.child_id === null)
            .map((chore) => (
              <div className="un-chore">
                <h3>{chore.title}</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <select
                    defaultValue="Pick One"
                    className="dropDown"
                    name="childId"
                    id="childId"
                    aria-label="New Chore Child Selection"
                    onChange={(e) =>
                      this.updateChoreChildId(e.target.value, chore.id)
                    }
                    // defaultValue=""
                  >
                    <option disabled>Pick One</option>
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
                  <input
                    type="submit"
                    value="Assign"
                    aria-label="Assign Chore"
                  />
                </form>
              </div>
            ))}
        </section>
      </div>
    );
  }
}
