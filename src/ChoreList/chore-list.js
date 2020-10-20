import React from "react";
import Nav from "../Nav/nav";
import AddForm from "../AddForm/add-form";
import ChildList from "../ChildList/child-list";
import ManipulateChores from "../ManipulateChores/manipulate-chores";
import UnassignedChoreList from "../UnnassignedChoreList/unnassigned-chore-list";

import "./chore-list.css";

export default class ChoreList extends React.Component {
  render() {
    return (
      <div className="chore-list">
        <Nav />

        <AddForm />

        <ChildList />
        <ManipulateChores />

        <UnassignedChoreList />
      </div>
    );
  }
}
