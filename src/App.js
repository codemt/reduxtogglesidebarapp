import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import { connect } from 'react-redux';
import   dispatcher   from './actions/dispatcher';
import DashboardWidget1 from './components/dashboard/dashboard-widget1';
import DashboardWidget2 from './components/dashboard/dashboard-widget2';
import DashboardWidget3 from './components/dashboard/dashboard-widget3';
import DashboardWidget4 from './components/dashboard/dashboard-widget4';
import DashboardWidget5 from './components/dashboard/dashboard-widget5';

class App extends Component {

  constructor(props){

    super(props);
    this.state = {

        wrapperName : 'wrapper slide-menu'

    }
    this.toggleClassName = this.toggleClassName.bind(this);
    
}
toggleClassName(e){
      e.preventDefault();
    this.setState({

        wrapperName : 'wrapper'
        
    })
    console.log(this.state.wrapperName);
}
  render() {

    const sidebarName = this.props.name;
    console.log('sidebarname is '+sidebarName);
    const wrapperName = this.state.wrapperName;
    console.log(wrapperName);
    
    return (

       

 <div>
      {/* <body> */}

<div className={sidebarName}> 
      
{/* <!--preloader --> */}
 
<div id="pre-loader">
    <img src="images/pre-loader/loader-01.svg" alt="" />
</div>

{/* <!--preloader --> */}


{/* <!--header start--> */}
      
<nav className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  {/* <!-- logo --> */}
  <div className="text-left navbar-brand-wrapper">
    <a className="navbar-brand brand-logo" href="index.html"><img src="images/logo-dark.png" alt="" /></a>
    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-icon-dark.png" alt="" /></a>
  </div>
  {/* <!-- Top bar left --> */}
  <ul className="nav navbar-nav mr-auto">
    <li className="nav-item">
      <a id="button-toggle" className="button-toggle-nav inline-block ml-20 pull-left" href="javascript:void(0);"><i className="zmdi zmdi-menu ti-align-right"></i></a>
    </li>
    <li className="nav-item">
      <div className="search">
        <a className="search-btn not_click" href="javascript:void(0);"></a>
        <div className="search-box not-click">
          <input type="text" className="not-click form-control" placeholder="Search" value="" name="search" />
          <button className="search-button" type="submit"> <i className="fa fa-search not-click"></i></button>
        </div>
      </div>
    </li>
  </ul>
  {/* <!-- top bar right --> */}
  <ul className="nav navbar-nav ml-auto">
    <li className="nav-item fullscreen">
      <a id="btnFullscreen" href="#" className="nav-link" ><i className="ti-fullscreen"></i></a>
    </li>
    <li className="nav-item dropdown ">
      <a className="nav-link top-nav" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <i className="ti-bell"></i>
        <span className="badge badge-danger notification-status"> </span>
      </a>
      <div className="dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications">
        <div className="dropdown-header notifications">
          <strong>Notifications</strong>
          <span className="badge badge-pill badge-warning">05</span>
        </div>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">New registered user <small className="float-right text-muted time">Just now</small> </a>
        <a href="#" className="dropdown-item">New invoice received <small className="float-right text-muted time">22 mins</small> </a>
        <a href="#" className="dropdown-item">Server error report<small className="float-right text-muted time">7 hrs</small> </a>
        <a href="#" className="dropdown-item">Database report<small className="float-right text-muted time">1 days</small> </a>
        <a href="#" className="dropdown-item">Order confirmation<small className="float-right text-muted time">2 days</small> </a>
      </div>
    </li>
    <li className="nav-item dropdown ">
      <a className="nav-link top-nav" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true"> <i className=" ti-view-grid"></i> </a>
      <div className="dropdown-menu dropdown-menu-right dropdown-big">
        <div className="dropdown-header">
          <strong>Quick Links</strong>
        </div>
        <div className="dropdown-divider"></div> 
        <div className="nav-grid">
          <a href="#" className="nav-grid-item"><i className="ti-files text-primary"></i><h5>New Task</h5></a>
          <a href="#" className="nav-grid-item"><i className="ti-check-box text-success"></i><h5>Assign Task</h5></a>
        </div>
        <div className="nav-grid">
          <a href="#" className="nav-grid-item"><i className="ti-pencil-alt text-warning"></i><h5>Add Orders</h5></a>
          <a href="#" className="nav-grid-item"><i className="ti-truck text-danger "></i><h5>New Orders</h5></a>
        </div>
      </div>
    </li>
    <li className="nav-item dropdown mr-30">
      <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <img src="images/profile-avatar.jpg" alt="avatar" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-header">
          <div className="media">
            <div className="media-body">
              <h5 className="mt-0 mb-0">Michael Bean</h5>
              <span>michael-bean@mail.com</span>
            </div>
          </div>
        </div>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#"><i className="text-secondary ti-reload"></i>Activity</a>
        <a className="dropdown-item" href="#"><i className="text-success ti-email"></i>Messages</a>
        <a className="dropdown-item" href="#"><i className="text-warning ti-user"></i>Profile</a>
        <a className="dropdown-item" href="#"><i className="text-dark ti-layers-alt"></i>Projects <span className="badge badge-info">6</span> </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#"><i className="text-info ti-settings"></i>Settings</a>
        <a className="dropdown-item" href="#"><i className="text-danger ti-unlock"></i>Logout</a>
      </div>
    </li>
  </ul>
</nav>

{/* <!--header End--> */}

{/* <!--Main content --> */}
 
<div className="container-fluid">
  <div className="row">
    {/* <!-- Left Sidebar start--> */}
    <SideBar />

{/* <!-- Left Sidebar End--> */}

 {/* <!--wrapper --> */}

    <div className="content-wrapper">
      <div className="page-title">
        <div className="row" style={{paddingTop:50}}>
          <div className="col-sm-6">
              <h4 className="mb-0"> Dashboard</h4>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb pt-0 pr-0 float-left float-sm-right">
              <li className="breadcrumb-item"><a href="index.html" className="default-color">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
      {/* <!-- widgets --> */}
        <DashboardWidget1 />
      {/* <!-- Widgets End--> */}
      {/* <!-- Orders Status widgets--> */}
        <DashboardWidget2 />
      {/* <!-- Orders Status widgets End --> */}
       {/* <!-- Widgets3 - Customer Feedback and Best Sellers  --> */}
        <DashboardWidget3 />
       {/* <!-- Widgets3 - Customer Feedback and Best Sellers END   --> */}
        {/* <!-- Widgets4 - Best Selling Items , Site Visits Growth , Micheal Bean   --> */}
          <DashboardWidget4 />
     {/* <!-- Widgets4 END - Best Selling Items , Site Visits Growth , Micheal Bean    --> */}      
      {/* <!-- Widgets5  - Calender , Event ,    --> */}     
          <DashboardWidget5 />
      {/* <!-- Widgets5  END  - Calender , Event ,    --> */}  
{/* <!-- content wrapper end --> */}
      
{/* <!--footer --> */}

    <footer className="bg-white p-4">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center text-md-left">
              <p className="mb-0"> &copy; Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span>. <a href="#"> Webmin </a> All Rights Reserved. </p>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="text-center text-md-right">
            <li className="list-inline-item"><a href="#">Terms & Conditions </a> </li>
            <li className="list-inline-item"><a href="#">API Use Policy </a> </li>
            <li className="list-inline-item"><a href="#">Privacy Policy </a> </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
    {/* <!-- main content wrapper end--> */}
  </div>
 </div>
</div>

{/* <!--footer end --> */}

{/* </body> */}
 </div>
    );
  }
}
const mapStatetoProps = state  => ({
  name : state.name

});
const mapDispatchtoProps = dispatch => ({

      setName : (name) => {

            dispatch({

                type: "TOGGLE_SIDEBAR",
                payload: name 

            })

      }

})
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
