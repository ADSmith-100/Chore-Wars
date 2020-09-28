import React, { Component } from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import "./intro-data.css";

export default class IntroData extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="IntroData">
          <div className="IntroHeader">
            <header>
              <h2 className="banner">Housework, meet your match.</h2>
            </header>
            <section>
              <header>
                <h3>The tides have turned in the eternal battle</h3>
              </header>
              <p>
                [<em>placeholder for screenshot of chore creation interface</em>
                ]
              </p>
              <p>
                Chore Wars helps you organize you housework in a fun and easy
                way. Create personalized chore lists, randomly assign chores to
                different family members or housemates, ensure fairness in the
                struggle!
              </p>
            </section>
            <section>
              <header>
                <h3>Get bonused!</h3>
              </header>
              <p>
                [<em>placeholder for screenshot of chore scoreboard</em>]
              </p>
              <p>
                Create goals and smash through them! You can create custom IRL
                rewards that housemates can vote on to incentivize progress-
                pizza parties for the people! PLUS - in-game awards grant access
                to perks like the "Swap-a-Chore" and extra votes for the IRL
                rewards.
              </p>
            </section>
            <section>
              <header>
                <h3>Knowing is half the battle!</h3>
              </header>
              <p>
                [<em>placeholder for screenshot of chore stats UI</em>]
              </p>
              <p>
                Gain an edge with interactive charts and personalized statistics
                to help you on stay on track with your goals.
              </p>
            </section>
            <section>
              <header>
                <h3>To those who are about to mop, we salute you!</h3>
              </header>
            </section>
          </div>
          <div className=""></div>
        </div>
      </BrowserRouter>
    );
  }
}
