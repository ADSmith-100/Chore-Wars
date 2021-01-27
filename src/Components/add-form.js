import React from "react";
import AddChild from "./addChild";
import AddChore from "./add-chore";

export default class AddForm extends React.Component {
  render() {
    return (
      <div className="AddForm">
        <AddChild />
        <AddChore />
      </div>
    );
  }
}
