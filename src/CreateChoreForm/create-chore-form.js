import React, { Component, useState } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import $ from "jquery";
import "./create-chore-form.css";
import { render } from "@testing-library/react";

export default function CreateChoreForm() {
  const [inputList, setInputList] = useState([
    { memberName: "", choreName: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { memberName: "", choreName: "" }]);
  };
  return (
    <div>
      <h2>New Chore List Form</h2>
      {inputList.map((x, i) => {
        return (
          <div className="chore-form">
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
              <div className="member-name" id="add-member">
                <label>Add Household Member</label>
                <input
                  id="first-member"
                  type="text"
                  className="member-name"
                  placeholder="Larry"
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick}>Add</button>
                  )}
                </div>
              </div>

              <div className="chore-title" id="add-chore">
                <label>Add New Chore</label>
                <input
                  id="first-chore"
                  type="text"
                  name="chore-title"
                  placeholder="Dinner Dishes"
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <button
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button onClick={handleAddClick}>Add</button>
                  )}
                </div>
                <input
                  type="checkbox"
                  name="isDaily"
                  id="isDaily"
                  title="Daily Chore?"
                >
                  {/* Daily Chore? */}
                </input>
              </div>

              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
