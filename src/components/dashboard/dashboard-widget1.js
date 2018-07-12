import React, { Component } from 'react';

 class DashboardWidget1 extends Component {
  render() {
    return (
      <div>
                {/* <!-- widgets --> */}
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="card card-statistics h-100">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <span className="text-danger">
                    <i className="fa fa-bar-chart-o highlight-icon" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="float-right text-right">
                  <p className="card-text text-dark">Visitors</p>
                  <h4>65,650</h4>
                </div>
              </div>
              <p className="text-muted pt-3 mb-0 mt-2 border-top">
                <i className="fa fa-exclamation-circle mr-1" aria-hidden="true"></i> 81% lower growth
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="card card-statistics h-100">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <span className="text-warning">
                    <i className="fa fa-shopping-cart highlight-icon" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="float-right text-right">
                  <p className="card-text text-dark">Orders</p>
                  <h4>656</h4>
                </div>
              </div>
              <p className="text-muted pt-3 mb-0 mt-2 border-top">
                <i className="fa fa-bookmark-o mr-1" aria-hidden="true"></i> Total sales
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="card card-statistics h-100">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <span className="text-success">
                    <i className="fa fa-dollar highlight-icon" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="float-right text-right">
                  <p className="card-text text-dark">Revenue</p>
                  <h4>$65656</h4>
                </div>
              </div>
              <p className="text-muted pt-3 mb-0 mt-2 border-top">
                <i className="fa fa-calendar mr-1" aria-hidden="true"></i> Sales Per Week 
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="card card-statistics h-100">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <span className="text-primary">
                    <i className="fa fa-twitter highlight-icon" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="float-right text-right">
                  <p className="card-text text-dark">Followers</p>
                  <h4>62,500+</h4>
                </div>
              </div>
              <p className="text-muted pt-3 mb-0 mt-2 border-top">
                <i className="fa fa-repeat mr-1" aria-hidden="true"></i> Just Updated
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Widgets End--> */}
        
      </div>
    )
  }
};
export default DashboardWidget1;
