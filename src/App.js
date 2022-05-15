import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
