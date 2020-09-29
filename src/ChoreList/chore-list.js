import React from "react";
import "./chore-list.css";

export default function ChoreList() {
  return (
    <div>
      <header role="banner">
        <h1>Smith Household</h1>
        <h2>Chore List for Week: 9/25/20-10/2/20</h2>

        <h2>Household Reward: PIZZA-PARTY!</h2>
        <h2>Completion Rate Needed For Reward: 90%</h2>
        <h3>Current Completion Rate: 0%</h3>
        <h3>Let's do out best ; )</h3>
      </header>

      <section>
        <h2>Household Chores Remaining</h2>
        <div className="choresRemaining" style={{ overflowX: "auto" }}>
          <table>
            <tr>
              <th>Chore Title</th>
            </tr>

            <tr>
              <td>Empty Kitchen Trash</td>
            </tr>

            <tr>
              <td>Clean Bathroom</td>
            </tr>

            <tr>
              <td>Rake Leaves</td>
            </tr>

            <tr>
              <td>Load Dishes</td>
            </tr>

            <tr>
              <td>Unload Dishes</td>
            </tr>

            <tr>
              <td>Mow the Grass</td>
            </tr>
          </table>
        </div>
        <button>Refresh</button>
      </section>

      <h2>Larry's Chores</h2>
      <div className="memberChoreTables" style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>Chore Title</th>
            <th>Completed?</th>
            <th>Comments</th>
          </tr>
          <tr>
            <td>Unload Dishes</td>
            <td>
              <input type="checkbox" name="c1" />
              &nbsp;
            </td>
            <td>Had a bad attitude!</td>
          </tr>
          <tr>
            <td>Vacuum Living Room</td>
            <td>
              <input type="checkbox" name="c2" />
              &nbsp;
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>

          <tr>
            <td>Paint the chicken coop</td>
            <td>
              <input type="checkbox" name="c2" />
              &nbsp;
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
      </div>

      <button>Update</button>
      <button>Clear</button>

      <h2>Moe's Chores</h2>
      <div className="memberChoreTables" style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>Chore Title</th>
            <th>Completed?</th>
            <th>Comments</th>
          </tr>
          <tr>
            <td>Load Dishes</td>
            <td>
              <input type="checkbox" name="c1" />
              &nbsp;
            </td>
            <td>Had a bad attitude!</td>
          </tr>
          <tr>
            <td>Vacuum Bedrooms</td>
            <td>
              <input type="checkbox" name="c2" />
              &nbsp;
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Mow the Grass</td>
            <td>
              <input type="checkbox" name="c2" />
              &nbsp;
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
      </div>

      <button>Update</button>
      <button>Clear</button>

      <h2>Curly's Chores</h2>
      <div className="memberChoreTables" style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>Chore Title</th>
            <th>Completed?</th>
            <th>Comments</th>
          </tr>
          <tr>
            <td>Empty Kitchen Trash</td>
            <td>
              <input type="checkbox" name="c1" />
              &nbsp;
            </td>
            <td>Had a bad attitude!</td>
          </tr>
          <tr>
            <td>Clean Bathroom</td>
            <td>
              <input type="checkbox" name="c2" />
              &nbsp;
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Rake Leaves</td>
            <td>
              <input type="checkbox" name="c2" />
              &nbsp;
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
      </div>
      <button>Update</button>
      <button>Clear</button>
      <div>
        <button className="chore-list-bottom-buttons">
          Go To Results Page!
        </button>
      </div>
    </div>
  );
}

// possible to make this button only clickable after the time has elasped?
