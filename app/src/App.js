import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import { AddBloomForm } from "./components/AddBloomForm";
import { DisplayBlooms } from "./components/DisplayBlooms";

const App = () => (
    <div className="App">
        <AddBloomForm />
        <DisplayBlooms />
    </div>
);

export default hot(module)(App);
