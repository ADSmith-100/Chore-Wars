import React from "react";
import AddChild from "./AddChild/addChild";
import AddChore from "./AddChore/add-chore";

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
