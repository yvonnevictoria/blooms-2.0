import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import { AddBloomForm } from "./components/AddBloomForm";

const App = () => (
    <div className="App">
        <AddBloomForm />
    </div>
);

export default hot(module)(App);
