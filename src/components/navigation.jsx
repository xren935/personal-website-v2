import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Cover from "./cover";
import Timeline from "./timeline";
import styles from "../static/css/main.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <nav class="navbar navbar-inverse navbar-global navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              />
            </div>
            <div id="navbar" class="collapse navbar-collapse" />
          </div>
        </nav>
        <nav class="navbar-primary">
          <ul class="navbar-primary-menu">
            <li>
              <a href="https://www.facebook.com/annie.ren.988">
                <span class="glyphicon glyphicon-envelope" />
                <span class="nav-label">Facebook</span>
              </a>
              <a href="https://github.com/xren935">
                <span class="glyphicon glyphicon-cog" />
                <span class="nav-label">Github</span>
              </a>
              <a href="https://www.linkedin.com/in/annie-xingya-ren/">
                <span class="glyphicon glyphicon-film" />
                <span class="nav-label">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/annieren_v2.1/">
                <span class="glyphicon glyphicon-calendar" />
                <span class="nav-label">Instagram</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navigation;
