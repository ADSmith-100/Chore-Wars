import React, { Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Context from "./context";
import Nav from "./Nav/nav";
import IntroData from "./IntroData/intro-data";
import SignUpForm from "./SignUpForm/sign-up-form";
import CreateChoreForm from "./CreateChoreForm/create-chore-form";
import ChoreList from "./ChoreList/chore-list";
import Results from "./Results/results";

export default class App extends React.Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    // this.state = {};
  }

  // componentDidMount() {
  //   fetch("https://fierce-harbor-17385.herokuapp.com/api/folders")
  //     .then((res) => res.json())
  //     .then((folders) => this.setState({ folders }));

  //   fetch("https://fierce-harbor-17385.herokuapp.com/api/notes")
  //     .then((res) => res.json())
  //     .then((notes) => this.setState({ notes }));
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <section className="landing_page">
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Nav />
                    <IntroData />
                    <SignUpForm />
                  </Fragment>
                )}
              />
            </section>

            <Route
              path="/create-chore-form"
              render={(props) => (
                <Fragment>
                  <Nav />
                  <CreateChoreForm />
                </Fragment>
              )}
            />
            <Route
              path="/chore-list/:list_id"
              render={(props) => (
                <Fragment>
                  <Nav />
                  <ChoreList />
                </Fragment>
              )}
            />
            <Route
              path="/results/:list_id"
              render={(props) => (
                <Fragment>
                  <Nav />
                  <Results />
                </Fragment>
              )}
            />
          </div>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}
