import React from "react";
import "./results.css";

export default function Results() {
  return (
    <div>
      <header>
        <h1>Smith House Results from 9/25/2020 - 10/2/2020</h1>
      </header>

      <h2>RESULTS!</h2>

      <div class="resultsTable" style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>Name</th>
            <th>Number Chores Completed</th>
            <th>Completion %</th>
            <th>Awards</th>
          </tr>
          <tr>
            <td>Larry</td>
            <td>3</td>
            <td>100</td>
            <td>Swap-A-Chore available next week!</td>
          </tr>
          <tr>
            <td>Curly</td>
            <td>2</td>
            <td>67%</td>
            <td>Try harder plz :/</td>
          </tr>

          <tr>
            <td>Moe</td>
            <td>1</td>
            <td>33%</td>
            <td>BIG FAIL</td>
          </tr>
        </table>
      </div>
      <h2>Household Results: 6/9 completed</h2>
      <h3>D+ NOT COOL</h3>
      <h3>Pizza Party was NOT EARNED! Try again next week!</h3>

      <button>Email Results!</button>
      <button>Start a new week!</button>
    </div>
  );
}
