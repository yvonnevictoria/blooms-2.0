import React from "react";
import {hot} from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import { AddBloomForm } from "./components/AddBloomForm";
import { DisplayBlooms } from "./components/DisplayBlooms";

const App = () => (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <DisplayBlooms />
                </Route>
                <Route exact path="/add">
                    <AddBloomForm />
                </Route>
                <Route>
                    <Error message="An error occurred, please try again" />
                </Route>
            </Switch>
        </div>
    </Router>
);

export default hot(module)(App);
