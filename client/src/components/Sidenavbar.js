import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./css/style.css";
import "./css/materialdesignicons.min.css";
function Sidenavbar() {
  return (
    <React.Fragment>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <NavLink
            to="/home"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            <li className="nav-item">
              <a className="nav-link" href="/home">
                <i className="mdi mdi-home menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
          </NavLink>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <i className="mdi mdi-checkbox-multiple-blank menu-icon"></i>
              <span className="menu-title">Posts</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    New
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    All(10)
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/forms/basic_elements.html">
              <i className="mdi mdi-chart-bar menu-icon"></i>
              <span className="menu-title">Stats</span>
            </a>
          </li>
          <NavLink
            to="/comments"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            <li className="nav-item">
              <a className="nav-link" href="/comments">
                <i className="mdi mdi-comment menu-icon"></i>
                <span className="menu-title">Comments</span>
              </a>
            </li>
          </NavLink>
          <NavLink
            to="/earnings"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            <li className="nav-item">
              <a className="nav-link" href="/earnings">
                <i className="mdi mdi-currency-usd menu-icon"></i>
                <span className="menu-title">Earnings</span>
              </a>
            </li>
          </NavLink>
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <i className="mdi mdi-format-paint menu-icon"></i>
              <span className="menu-title">Themes</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#auth"
              aria-expanded="false"
              aria-controls="auth"
            >
              <i className="mdi mdi-account menu-icon"></i>
              <span className="menu-title">User Pages</span>
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Sidenavbar;
