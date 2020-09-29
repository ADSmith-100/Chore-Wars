import React, { Component, useState } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import "./create-chore-form.css";

export default function CreateChoreForm() {
  const [inputListMember, setInputListMember] = useState([{ memberName: "" }]);

  const [inputListChore, setInputListChore] = useState([{ choreName: "" }]);

  // handle input change
  const handleInputChangeMember = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListMember];
    list[index][name] = value;
    setInputListMember(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickMember = (index) => {
    const list = [...inputListMember];
    list.splice(index, 1);
    setInputListMember(list);
  };

  // handle click event of the Add button
  const handleAddClickMember = () => {
    setInputListMember([...inputListMember, { memberName: "" }]);
  };

  // handle input change

  const handleInputChangeChore = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListChore];
    list[index][name] = value;
    setInputListChore(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickChore = (index) => {
    const list = [...inputListChore];
    list.splice(index, 1);
    setInputListChore(list);
  };

  // handle click event of the Add button
  const handleAddClickChore = () => {
    setInputListChore([...inputListChore, { choreName: "" }]);
  };

  return (
    <div className="chore-form">
      <h1>Create New Chore Chart</h1>
      <form id="add-chores-form">
        <label>Household Name</label>
        <input
          type="text"
          name="household-name"
          placeholder="The Smith's"
          required
        />

        <div className="form-section">
          <label>Chore Week Begins</label>
          <input type="date" placeholder="yyyy-mm-dd" required />
        </div>
        <div className="form-section">
          <label>Chore Week Ends</label>
          <input type="date" placeholder="yyyy-mm-dd" required />
        </div>
        {inputListMember.map((x, i) => {
          return (
            <div className="member-name" id="add-member">
              <label>Add Household Member</label>
              <input
                id="first-member"
                type="text"
                className="member-name"
                placeholder="Larry"
                onChange={(e) => handleInputChangeMember(e, i)}
              />

              {inputListMember.length !== 1 && (
                <button
                  className="mr10"
                  onClick={() => handleRemoveClickMember(i)}
                >
                  Remove
                </button>
              )}
              {inputListMember.length - 1 === i && (
                <button onClick={handleAddClickMember}>Add</button>
              )}
            </div>
          );
        })}
        {inputListChore.map((x, i) => {
          return (
            <div className="chore-title" id="add-chore">
              <label>New Chore</label>
              <input
                id="first-chore"
                type="text"
                name="chore-title"
                placeholder="Dinner Dishes"
                onChange={(e) => handleInputChangeChore(e, i)}
              />

              {inputListChore.length !== 1 && (
                <button
                  className="mr10"
                  onClick={() => handleRemoveClickChore(i)}
                >
                  Remove
                </button>
              )}
              {inputListChore.length - 1 === i && (
                <button onClick={handleAddClickChore}>Add</button>
              )}

              <input
                type="checkbox"
                name="isDaily"
                id="isDaily"
                title="Daily Chore?"
              ></input>
              <label>Daily?</label>
            </div>
          );
        })}
        <div>
          <label>Reward for the chart?</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Percentage of Chores Completed for Reward?</label>
          <input type="number" max="100"></input>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}
