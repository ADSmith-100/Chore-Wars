import React from "react";
import Context from "../Context/context";
import UnassignChores from "./unassign-chores";
import ShuffleChores from "./shuffle-chores";

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
