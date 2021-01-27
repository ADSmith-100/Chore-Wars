import React from "react";
import Context from "../Context/context";
import TokenService from "../services/token-service";

function shuffleAllChoresRequest(ShuffledChores, callback) {
  fetch("https://stark-tor-49670.herokuapp.com/api/chores", {
    method: "POST",
    headers: {
      authorization: `bearer ${TokenService.getAuthToken()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ShuffledChores,
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
      callback(ShuffledChores);
    })
    .catch((error) => {
      //console.log(error);
    });
}

export default class shuffleChores extends React.Component {
  static contextType = Context;
  state = {
    chores: {},
  };

  shuffleChores(e) {
    let randomIds = this.context.children.map((a) => a.id);
    //let newId = randomIds[Math.floor(Math.random() * randomIds.length)];
    let chores = this.context.chores.map((chore) => {
      chore.child_id = randomIds[Math.floor(Math.random() * randomIds.length)];
      chore.status = false;
      return chore;
    });

    this.setState({ chores });
    let { ShuffledChores } = this.state;
    shuffleAllChoresRequest(ShuffledChores, this.context.shuffleAllChores);
  }

  render() {
    return (
      <div>
        <div id="shuffle">
          <button onClick={(e) => this.context.shuffleChores(e)}>
            Shuffle Chores!
          </button>
        </div>
      </div>
    );
  }
}
