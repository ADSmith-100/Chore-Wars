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
import LoginForm from "./LogInForm/login-form";
import SignUpForm from "./SignUpForm/sign-up-form";
import dummyStore from "./dummy-store";

export default class App extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      randomIds: [],
      newChore: {
        title: "",
        child_id: "",
      },
      newChild: "",

      loginUser: (email, password) =>
        this.setState({ user: { email, password } }),

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

  componentDidMount() {
    this.setState({ ...dummyStore });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <section>
              <Route exact path="/" component={IntroData} />
            </section>
            <Route path="/chore-list" component={ChoreList} />
            <Route path="/login-form" component={LoginForm} />
            <Route path="/sign-up-form" component={SignUpForm} />
          </div>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

//move all state and methods into app, then put state into context and break out render methods into components.

// componentDidMount() {
//   this.setState({})

//   fetch("https://fierce-harbor-17385.herokuapp.com/api/notes")
//     .then((res) => res.json())
//     .then((notes) => this.setState({ notes }));
// }
