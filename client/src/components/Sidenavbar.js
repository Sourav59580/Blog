import React from "react";
import {
  NavLink
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
                <NavLink
                  to="/newpost"
                  activeClassName="navbar__link--active"
                  className="navbar__link px-3"
                >
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/buttons.html"
                    >
                      New
                    </a>
                  </li>
                </NavLink>
                <NavLink
                  to="/allpost"
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                >
                  <li className="nav-item px-3">
                    {" "}
                    <a
                      className="nav-link"
                      href="pages/ui-features/typography.html"
                    >
                      All
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </li>
          <NavLink
            to="/stats"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/basic_elements.html">
                <i className="mdi mdi-chart-bar menu-icon"></i>
                <span className="menu-title">Stats</span>
              </a>
            </li>
          </NavLink>
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
          <NavLink
            to="/themes"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            <li className="nav-item">
              <a className="nav-link" href="pages/icons/mdi.html">
                <i className="mdi mdi-format-paint menu-icon"></i>
                <span className="menu-title">Themes</span>
              </a>
            </li>
          </NavLink>
          <NavLink
            to="/setting"
            activeClassName="navbar__link--active"
            className="navbar__link"
          >
            <li className="nav-item">
              <a className="nav-link" href='/setting'>
                <i className="mdi mdi-settings menu-icon"></i>
                <span className="menu-title">Setting</span>
              </a>
            </li>
          </NavLink>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Sidenavbar;
