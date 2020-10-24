import React from "react";
import Context from "../Context/context";
import UnassignChores from "./UnassignAllChores/unassign-chores";
import ShuffleChores from "./ShuffleChores/shuffle-chores";

export default class ManipulateChores extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <UnassignChores />
        <ShuffleChores />
      </div>
    );
  }
}
