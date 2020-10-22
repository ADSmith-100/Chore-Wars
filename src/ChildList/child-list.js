import React from "react";
//import ChoreList from "../ChoreList/chore-list";
import Context from "../Context/context";
//import TokenService from "../services/token-service";

//function updateChoreRequest(chores, cb) {}
//   fetch(`https://stark-tor-49670.herokuapp.com/api/chores`, {
//     method: "PATCH",
//     headers: new Headers({
//       authorization: `bearer ${TokenService.getAuthToken()}`,
//       "content-type": "application/json",
//     }),
//     body: JSON.stringify({
//       status: !chore.status,
//     }),
//   })
//     //not sure how this should work but look at TJs videos!
//     .then((res) => {
//       if (!res.ok) {
//         // get the error message from the response,
//         return res.json().then((error) => {
//           // then throw it
//           throw error;
//         });
//       }
//     })
//     .then((data) => {
//       //console.log({ data, cb });
//       cb(chore_id);
//     })
//     .catch((error) => {
//       //console.log(error);
//     });
// }

export default class ChildList extends React.Component {
  static contextType = Context;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     status: { value: "" },
  //   };
  // }

  render() {
    const { children = [] } = this.context || [];
    const ChildList = children.map((child) => (
      <div className="child" key={child.id}>
        <h3>{child.name}</h3>
        <ul key={child.id}>
          {this.context.chores
            .filter((c) => c.child_id === child.id)
            .map((chore) => (
              <li
                key={chore.id}
                className={`chore-completed-${chore.status}`}
                onClick={() => this.context.toggleCompleted(chore.id)}
              >
                <span>{chore.title}</span>
              </li>
            ))}
        </ul>
      </div>
    ));

    return (
      <div>
        <h1>Your Chore List</h1>
        <section className="children">{ChildList}</section>
      </div>
    );
  }
}
