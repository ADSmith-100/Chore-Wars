import React from "react";
import Context from "../../Context/context";
import TokenService from "../../services/token-service";

function unassignAllChoresRequest(UnassignedChores, callback) {
  fetch("https://stark-tor-49670.herokuapp.com/api/chores", {
    method: "PUT",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      UnassignedChores,
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
      callback(UnassignedChores);
    })
    .catch((error) => {
      //console.log(error);
    });
}

export default class UnassignAll extends React.Component {
  static contextType = Context;

  state = {
    chores: {},
  };

  unAssignAll(e) {
    let chores = this.context.chores.map((chore) => {
      chore.child_id = null;
      chore.status = false;

      return chore;
    });
    this.setState({ chores });
    let { UnassignedChores } = this.state;
    unassignAllChoresRequest(UnassignedChores, this.context.unassignAllChores);
    // this.setState({ newChore: "" });
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.unAssignAll(e)}>
          Unassign All Chores
        </button>
      </div>
    );
  }
}
