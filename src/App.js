import React, { Fragment } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Context from "./Context/context";
import Nav from "./Nav/nav";
import IntroData from "./IntroData/intro-data";

import ChoreList from "./ChoreList/chore-list";

import AddChild from "./AddForm/AddChild/addChild";
import AddForm from "./AddForm/add-form";
import ChildList from "./ChildList/child-list";
import ManipulateChores from "./ManipulateChores/manipulate-chores";
import UnassignedChoreList from "./UnnassignedChoreList/unnassigned-chore-list";

export default class App extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);

    this.state = {
      randomIds: [],
      newChore: {
        title: "",
        child_id: "",
      },
      newChild: "",
      children: [
        { id: 1, name: "Larry" },
        { id: 2, name: "Curly" },
        { id: 3, name: "Moe" },
      ],
      chores: [
        {
          id: 1,
          title: "Mop",
          child_id: 2,
          status: false,
          comments: "",
        },
        {
          id: 2,
          title: "Vacuum",
          child_id: 2,
          status: true,
          comments: "Good I guess",
        },
        {
          id: 3,
          title: "Dust",
          child_id: 2,
          status: true,
          comments: "",
        },
        {
          id: 4,
          title: "Feed the chickens",
          child_id: 1,
          status: true,
          comments: "Nice work",
        },
        {
          id: 5,
          title: "Trash",
          child_id: 1,
          status: false,
          comments: "",
        },
        {
          id: 6,
          title: "Mow the grass",
          child_id: 1,
          status: false,
          comments: "",
        },
        {
          id: 7,
          title: "Polish silver",
          child_id: 3,
          status: true,
          comments: "",
        },
        {
          id: 8,
          title: "Empty cat box",
          child_id: 3,
          status: false,
          comments: "",
        },
        {
          id: 9,
          title: "Paint the chicken coop",
          child_id: 3,
          status: true,
          comments: "",
        },
      ],

      setNewChild: (e) => this.setState({ newChild: e.target.value }),

      // setNewChoreTitle: (e) => this.setState({ newChore.title: e.target.value }),

      toggleCompleted: (choreId) => {
        let chores = this.state.chores.map((chore) => {
          if (chore.id === choreId) {
            chore.status = !chore.status;
          }
          return chore;
        });
        this.setState({ chores });
      },

      updateChoreChildId: (childId, choreId) => {
        if (childId) {
          let result = this.state.children.filter((obj) => {
            return obj.name === childId;
          });
          let myChoreId = this.state.chores.filter((obj) => {
            return obj.id === choreId;
          });
          this.setState({
            newChore: {
              ...this.state.newChore,
              child_id: result[0].id,
              id: myChoreId[0].id,
            },
          });
        }
      },

      addChild: (e) => {
        e.preventDefault();
        this.setState({
          children: [...this.state.children, { name: e.target.value }],
        });
        if (this.state.newChild !== "") {
          const newChild = {
            id: this.state.children.length + 1,
            name: this.state.newChild,
          };
          this.setState({ children: [...this.state.children, newChild] });
          this.setState({ newChild: "" });
        }
      },

      updateChoreTitle: (name) => {
        if (name !== "") {
          this.setState({
            newChore: { ...this.state.newChore, title: name },
          });
        }
      },

      updateChildId: (childId) => {
        let result = this.state.children.filter((obj) => {
          return obj.name === childId;
        });

        this.setState({
          newChore: { ...this.state.newChore, child_id: result[0].id },
        });
      },

      reassignChore: (e) => {
        e.preventDefault();

        let chores = this.state.chores.map((chore) => {
          if (chore.id === this.state.newChore.id) {
            chore.child_id = this.state.newChore.child_id;
          }
          return chore;
        });
        this.setState({ chores });
        e.target.reset();
      },

      addChore: (e) => {
        e.preventDefault();
        if (this.state.newChore !== "") {
          const newChore = {
            id: this.state.chores.length + 1,
            title: this.state.newChore.title,
            child_id: this.state.newChore.child_id || null,
            status: false,
            comments: "",
          };
          this.setState({ chores: [...this.state.chores, newChore] });
          this.setState({ newChore: "" });
          e.target.reset();
        }
      },

      unAssignAll: (e) => {
        let chores = this.state.chores.map((chore) => {
          chore.child_id = null;
          chore.status = false;
          chore.comments = "";
          return chore;
        });
        this.setState({ chores });
        this.setState({ newChore: "" });
      },

      shuffleChores: (e) => {
        let randomIds = this.state.children.map((a) => a.id);
        let newId = randomIds[Math.floor(Math.random() * randomIds.length)];
        // let chores = this.state.chores.map((chore) => {
        //   chore.child_id = newId;
        //   return chore;
        let chores = this.state.chores.map((chore) => {
          chore.child_id =
            randomIds[Math.floor(Math.random() * randomIds.length)];
          chore.status = false;
          return chore;
        });

        this.setState({ chores });
      },
    };
  }

  render() {
    let ChildArray = [];
    for (let o in this.state.children) {
      ChildArray.push(this.state.children[o].name);
      return (
        <Context.Provider value={this.state}>
          <div className="App">
            {/* <Nav /> */}

            <p>
              <AddForm />
            </p>
            <ChildList
              {...this.state}
              children={this.state.children}
              chores={this.state.chores}
              onToggleChore={this.toggleCompleted}
            />
            <ManipulateChores />
          </div>
          <UnassignedChoreList />
        </Context.Provider>
      );
    }
  }
}
//move all state and methods into app, then put state into context and break out render methods into components.

// componentDidMount() {
//   this.setState({})

//   fetch("https://fierce-harbor-17385.herokuapp.com/api/notes")
//     .then((res) => res.json())
//     .then((notes) => this.setState({ notes }));
// }

//   render() {
//     return (
//       // <Context.Provider value={this.state}>
//       <BrowserRouter>
//         <div className="App">
//           <section>
//             <Route exact path="/" component={IntroData} />
//           </section>
//           <Route path="/chore-list" component={ChoreList} />
//           <Route path="/sign-up-form" component={SignUpForm} />

//           {/* <Route
//               path="/chore-list/:list_id"
//               render={(props) => (
//                 <Fragment>
//                   <Nav />

//                   <ChoreList />
//                 </Fragment>
//               )}
//             />
//             <Route
//               path="/results/:list_id"
//               render={(props) => (
//                 <Fragment>
//                   <Nav />
//                   <Results />
//                 </Fragment>
//               )}
//             /> */}
//         </div>
//       </BrowserRouter>
//       // </Context.Provider>
//     );
//   }
// }
