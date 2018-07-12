import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import DashboardWidget1 from './components/dashboard/dashboard-widget1';
import DashboardWidget2 from './components/dashboard/dashboard-widget2';
import DashboardWidget3 from './components/dashboard/dashboard-widget3';
import DashboardWidget4 from './components/dashboard/dashboard-widget4';
import DashboardWidget5 from './components/dashboard/dashboard-widget5';

class App extends Component {
  render() {
    return (

 <div>
      {/* <body> */}

<div className="wrapper">

{/* <!--preloader --> */}
 
<div id="pre-loader">
    <img src="images/pre-loader/loader-01.svg" alt="" />
</div>

{/* <!--preloader --> */}


{/* <!--header start--> */}
 
 <NavBar />

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

export default App;
