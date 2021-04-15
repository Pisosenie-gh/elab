import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './pages/index.js'
import Courses from './pages/courses'
import CoursePage from './pages/course-page';
import Events from './pages/events';
import JS from "./pages/js";
import Event_detail from "./pages/event_detail";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route
        path="/courses"
        render={(props) => <Courses {...props} />}
      />
      <Route
        path="/course-page"
        render={(props) => <CoursePage {...props} />}
      />
      <Route
        path="/events"
        render={(props) => <Events {...props} />}
      />
              <Route
        path="/event"
        render={(props) => <Event_detail {...props} />}
      />
              <Route
        path="/js"
        render={(props) => <JS {...props} />}
      />
        <Redirect from="/" to="/home"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
