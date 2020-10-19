import React from "react";
import Context from "../Context/context";

export default class ManipulateChores extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <div>
          <button onClick={(e) => this.context.unAssignAll(e)}>
            Unassign All Chores
          </button>
        </div>
        <div id="shuffle">
          <button onClick={(e) => this.context.shuffleChores(e)}>
            Shuffle Chores!
          </button>
        </div>
      </div>
    );
  }
}
