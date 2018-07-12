import React, { Component } from 'react';

 class DashboardWidget4 extends Component {
  render() {
    return (
      <div>
                  {/* <!-- Widgets4 - Best Selling Items , Site Visits Growth , Micheal Bean   --> */}
     <div className="row">
       <div className="col-xl-4 mb-30">
           <div className="card card-statistics h-100">
             <div className="card-body">
              <h5 className="card-title">Best Selling Items</h5>
               <ul className="list-unstyled">
                <li className="mb-20">
                  <div className="media">
                   <div className="position-relative">
                    <img className="img-fluid mr-15 avatar-small" src="images/item/01.png" alt="" />
                   </div> 
                    <div className="media-body">
                       <h6 className="mt-0 mb-0">Car dealer <span className="float-right text-danger"> 8,561</span>  </h6>
                       <p>Automotive WordPress Theme </p>
                    </div>
                  </div>
                  <div className="divider dotted mt-20"></div>
                </li>
                <li className="mb-20">
                  <div className="media">
                   <div className="position-relative clearfix">
                    <img className="img-fluid mr-15 avatar-small" src="images/item/02.png" alt="" />
                   </div> 
                    <div className="media-body">
                       <h6 className="mt-0 mb-0">Webster <span className="float-right text-warning"> 6,213</span>  </h6>
                       <p>Multi-purpose HTML5 Template </p>
                    </div>
                  </div>
                  <div className="divider dotted mt-20"></div>
                </li>
                 <li className="mb-20">
                  <div className="media">
                   <div className="position-relative">
                      <img className="img-fluid mr-15 avatar-small" src="images/item/03.png" alt="" />
                   </div> 
                    <div className="media-body">
                       <h6 className="mt-0 mb-0">The corps  <span className="float-right text-success"> 2,926</span>  </h6>
                       <p> Multi-Purpose WordPress Theme </p>
                    </div>
                  </div>
                  <div className="divider dotted mt-20"></div>
                </li>
                <li>
                  <div className="media">
                   <div className="position-relative clearfix">
                    <img className="img-fluid mr-15 avatar-small" src="images/item/04.png" alt=""/>
                   </div> 
                    <div className="media-body">
                       <h6 className="mt-0 mb-0">Sam martin <span className="float-right text-warning">6,213 </span></h6>
                       <p>Personal vCard Resume WordPress Theme </p>
                    </div>
                  </div>
                </li>
              </ul>
             </div>
           </div>
        </div>
        <div className="col-xl-4 mb-30">
              <div className="card h-100">
              <div className="btn-group info-drop">
                  <button type="button" className="dropdown-toggle-split text-muted" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-more"></i></button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#"><i className="text-primary ti-reload"></i>Refresh</a>
                    <a className="dropdown-item" href="#"><i className="text-secondary ti-eye"></i>View all</a>
                  </div>
                </div>
               <div className="card-body">
                 <h5 className="card-title">Site Visits Growth </h5>
                 <div className="row">
                    <div className="col-6">
                      <h6 className="text-danger">Income</h6>
                      <p className="text-danger">+584</p>
                    </div>
                    <div className="col-6">
                      <h6 className="text-info">Outcome</h6>
                      <p className="text-info">-255</p>
                    </div>  
                  </div>
                 <div id="morris-line" style={{height: '320'}}></div>
               </div> 
             </div>
         </div>
         <div className="col-xl-4 mb-30">
          <div className="card card-statistics h-100">
            <div className="p-4 text-center bg" style={{backgroundImage: `url(/images/bg/01.jpg)`}}>
               <h5 className="mb-70 text-white position-relative">Michael Bean </h5>
              <div className="btn-group info-drop">
                <button type="button" className="dropdown-toggle-split text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-more"></i></button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#"><i className="text-primary ti-files"></i> Add task</a>
                  <a className="dropdown-item" href="#"><i className="text-dark ti-pencil-alt"></i> Edit Profile</a>
                  <a className="dropdown-item" href="#"><i className="text-success ti-user"></i> View Profile</a>
                  <a className="dropdown-item" href="#"><i className="text-secondary ti-info"></i> Contact Info</a>
                </div>
              </div>
            </div>
            <div className="card-body text-center position-relative">
              <div className="avatar-top">
                <img className="img-fluid w-25 rounded-circle " src="images/team/13.jpg" alt="" />
               </div>
               <div className="row">
                  <div className="col-sm-4 mt-30">
                     <b>Files Saved</b>
                     <h4 className="text-success mt-10">1582</h4>
                  </div>
                  <div className="col-sm-4 mt-30">
                    <b>Memory Used </b>
                     <h4 className="text-danger mt-10">58GB</h4>
                  </div>
                  <div className="col-sm-4 mt-30">
                    <b>Spent Money</b>
                     <h4 className="text-warning mt-10">352,6$</h4>
                  </div>
                </div>
                <div className="divider mt-20"></div>
                 <p className="mt-30">17504 Carlton Cuevas Rd, Gulfport, MS, 39503</p>
                 <p className="mt-10">michael@webmin.com</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="#"><i className="fa fa-rss"></i></a></li>
                    <li className="social-facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li className="social-twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li className="social-github"><a href="#"><i className="fa fa-github"></i></a></li>
                    <li className="social-youtube"><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li className="social-instagram"><a href="#"><i className="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
     </div> 
     {/* <!-- Widgets4 END - Best Selling Items , Site Visits Growth , Micheal Bean    --> */}    
        
      </div>
    )
  }
};
export default DashboardWidget4;
