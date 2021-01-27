import React from "react";
import AddForm from "./add-form";
import ChildList from "./child-list";
import ManipulateChores from "./manipulate-chores";
import UnassignedChoreList from "./unnassigned-chore-list";

import "./chore-list.css";

export default class ChoreList extends React.Component {
  render() {
    return (
      <div className="chore-list">
        <AddForm />

        <ChildList />
        <ManipulateChores />

        <UnassignedChoreList />
      </div>
    );
  }
}
