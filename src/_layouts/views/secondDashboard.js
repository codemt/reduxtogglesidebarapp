import React, { Component } from 'react';
import '../../App.css';
import DashboardWidget2 from '../widgets/dashboard-widget2';
 class secondDashboard extends Component {
  render() {
    return (
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
        <DashboardWidget2 />
      {/* <!-- Widgets End--> */}
      {/* <!-- Orders Status widgets--> */}
        {/* <DashboardWidget2 /> */}
      {/* <!-- Orders Status widgets End --> */}
       {/* <!-- Widgets3 - Customer Feedback and Best Sellers  --> */}
        {/* <DashboardWidget3 /> */}
       {/* <!-- Widgets3 - Customer Feedback and Best Sellers END   --> */}
        {/* <!-- Widgets4 - Best Selling Items , Site Visits Growth , Micheal Bean   --> */}
          {/* <DashboardWidget4 /> */}
     {/* <!-- Widgets4 END - Best Selling Items , Site Visits Growth , Micheal Bean    --> */}      
      {/* <!-- Widgets5  - Calender , Event ,    --> */}     
          {/* <DashboardWidget5 /> */}
      {/* <!-- Widgets5  END  - Calender , Event ,    --> */}  
{/* <!-- content wrapper end --> */}
      
 {/* <!--footer --> */} 
        
    </div>
    )
  }
};
export default secondDashboard;
