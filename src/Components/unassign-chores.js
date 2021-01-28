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

// function unassignAllChoresRequest(chores, callback) {
//   fetch("https://stark-tor-49670.herokuapp.com/api/chores", {
//     method: "PUT",
//     headers: {
//       authorization: `bearer ${TokenService.getAuthToken()}`,
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({ chores }),
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
//       callback(chores);
//     })
//     .catch((error) => {
//       //console.log(error);
//     });
// }

export default class UnassignAll extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      chores: [],
    };
  }

  unAssignAll(e) {
    const newChores = this.context.chores;

    let unChores = [...newChores];

    unChores.map((chore) => {
      chore.child_id = null;
      chore.status = false;

      return chore;
    });
    this.setState({ unChores });
    console.log(unChores);
    this.state.chores.forEach((chore) =>
      reassignChoreRequest(
        chore.choreId,
        chore.childId,
        this.context.updateChore
      )
    );
    // unassignAllChoresRequest(chores, this.context.unassignAllChores);
    // // this.setState({ newChore: "" });
    // console.log(chores);
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
