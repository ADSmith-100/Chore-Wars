import React from "react";
import Context from "../Context/context";

export default class UnassignedChoreList extends React.Component {
  static contextType = Context;
  render() {
    let ChildArray = [];
    for (let o in this.context.children) {
      ChildArray.push(this.context.children[o].name);
    }
    const { chores = [] } = this.context || [];
    return (
      <div>
        <h2>Unassigned Chores</h2>
        <section className="unassigned-chores">
          {chores
            .filter((c) => c.child_id === null)
            .map((chore) => (
              <div className="un-chore">
                <h3>{chore.title}</h3>
                <form onSubmit={(e) => this.context.reassignChore(e)}>
                  <select
                    defaultValue="Pick One"
                    className="dropDown"
                    name="childId"
                    id="childId"
                    aria-label="New Chore Child Selection"
                    onChange={(e) =>
                      this.context.updateChoreChildId(e.target.value, chore.id)
                    }
                    // defaultValue=""
                  >
                    <option disabled>Pick One</option>
                    {ChildArray.map((child) => (
                      <option
                        {...child}
                        key={child.id}
                        value={child.id}
                        name={child.name}
                        text={child.name}
                      >
                        {child}
                      </option>
                    ))}
                    ;
                  </select>
                  <input
                    type="submit"
                    value="Assign"
                    aria-label="Assign Chore"
                  />
                </form>
              </div>
            ))}
        </section>
      </div>
    );
  }
}
