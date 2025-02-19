import React from 'react'
import './css/materialdesignicons.min.css';
import logo from './images/brand.jpg'
function Navbar() {
    return (
        <React.Fragment>
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100" style={{overflow:'hidden'}}>  
          <a className="navbar-brand brand-logo" href="/home"><img src="https://www.fivesquid.com/pics/t2/1466880336-56618-4-1.jpg" alt="logo" className='w-100 h-100'/></a>
          <a className="navbar-brand brand-logo-mini" href="/home"><img src={logo} alt="logo" className='w-100'/></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="mdi mdi-sort-variant"></span>
          </button>
        </div>  
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav mr-lg-4 w-100">
          <li className="nav-item nav-search d-none d-lg-block w-100">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="search">
                  <i className="mdi mdi-magnify"></i>
                </span>
              </div>
              <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown mr-1">
            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
              <i className="mdi mdi-message-text mx-0"></i>
              <span className="count"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png" alt="image" className="profile-pic"/>
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">John Doe
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                    <img src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" alt="image" className="profile-pic"/>
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">John Doe
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    New product launch
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                    <img src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-512.png" alt="image" className="profile-pic"/>
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal"> John Doe
                  </h6>
                  <p className="font-weight-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown mr-4">
            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown" id="notificationDropdown" href="#" data-toggle="dropdown">
              <i className="mdi mdi-bell mx-0"></i>
              <span className="count"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-success">
                    <i className="mdi mdi-information mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Application Error</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-warning">
                    <i className="mdi mdi-settings mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <div className="item-icon bg-info">
                    <i className="mdi mdi-account-box mx-0"></i>
                  </div>
                </div>
                <div className="item-content">
                  <h6 className="font-weight-normal">New user registration</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle"  data-toggle="dropdown" id="profileDropdown">
              <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" alt="profile"/>
              <span className="nav-profile-name">Sourav</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item" href='/setting'>
                <i className="mdi mdi-settings text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item" href='/logout'>
                <i className="mdi mdi-logout text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    </React.Fragment>
    )
}

export default Navbar
