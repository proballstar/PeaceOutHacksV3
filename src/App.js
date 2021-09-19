import React from "react";
import "./styles/tailwind-pre-build.css";
import Navbar from "./screens/Navbar";
import FormPage from "./screens/FormPage";
import BlogPage from "./screens/BlogPage";
import HomePage from "./screens/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/formpage" component={FormPage} />
            <Route path="/blogppage" component={BlogPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
