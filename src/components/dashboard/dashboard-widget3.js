import React, { Component } from 'react';

 class DashboardWidget3 extends Component {
  render() {
    return (
      <div>
                {/* <!-- Widgets3 - Customer Feedback and Best Sellers  --> */}
       <div className="row">
       <div className="col-xl-4 mb-30">
         <div className="card h-100">
           <div className="card-body">
             <h5 className="card-title">Customer Feedback  </h5>
             <div className="row mb-30">
                  <div className="col-md-6">
                      <div className="clearfix">
                       <p className="mb-10 float-left">Positive</p>
                       <i className="mb-10 text-success float-right fa fa-arrow-up"> </i>
                    </div>
                    <div className="progress progress-small">
                      <div className="skill2-bar bg-success" role="progressbar" style={{width: '70%',ariavaluenow:"70",ariavaluemin:"0", ariavaluemax:"100"}}></div>
                    </div>
                    <h4 className="mt-10 text-success">8501</h4>
                  </div>
                  <div className="col-md-6">
                     <div className="clearfix">
                       <p className="mb-10 float-left">Negative</p>
                       <i className="mb-10 text-danger float-right fa fa-arrow-down"> </i>
                    </div>
                    <div className="progress progress-small">
                      {/* <div className="skill2-bar bg-danger" role="progressbar" style={{width: '30%', ariavaluenow:'30',ariavaluemin='0',ariavaluemax='100'}}></div> */}
                    </div>
                    <h4 className="mt-10 text-danger">3251</h4>
                  </div>
               </div>
               <div className="chart-wrapper" style={{width: '100%', margin:'0 auto'}}> 
               <div id="canvas-holder">
                  <canvas id="canvas3" width="550"></canvas>
              </div>
            </div>
           </div> 
         </div> 
        </div>
        <div className="col-xl-8 mb-30">
          <div className="card card-statistics h-100">
            <div className="card-body">
                <div className="tab nav-border" style={{position: 'relative'}}>
                  <div className="d-block d-md-flex justify-content-between">
                    <div className="d-block w-100">
                      <h5 className="card-title">Best Sellers</h5>
                    </div>
                    <div className="d-block d-md-flex" style={{position: 'absolute',right: '0', top:0}}>
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active show" id="months-tab" data-toggle="tab" href="#months" role="tab" aria-controls="months" aria-selected="true"> Months</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="year-tab" data-toggle="tab" href="#year" role="tab" aria-controls="year" aria-selected="false">Year </a>
                        </li>
                      </ul>
                     </div>
                   </div>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade active show" id="months" role="tabpanel" aria-labelledby="months-tab">
                        <div className="row mb-30">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/05.jpg" alt=""/>
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">Supercharge your motivation</h6>
                              <p className="sm-mb-5 d-block">I truly believe Augustine’s words are true. </p> 
                              <span className="mb-0">by - <b className="text-info">PotenzaUser</b></span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-primary mb-0"><b>45,436</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-secondary mb-0"><b>$05,236</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                          <div className="row mb-30">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/02.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">Helen keller a teller seller</h6>
                              <p className="sm-mb-5 d-block">We also know those epic stories, those modern.</p> 
                              <span className="mb-0">by - <b className="text-warning">WebminUser</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-success mb-0"><b>23,462</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-danger mb-0"><b>$166</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                          <div className="row mb-30">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/03.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">The other virtues practice</h6>
                              <p className="sm-mb-5 d-block">One of the most difficult aspects of achieving. </p> 
                              <span className="mb-0">by - <b className="text-danger">TheCorps</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-warning mb-0"><b>5,566</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-info mb-0"><b>$4,126</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                          <div className="row">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/04.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">You will begin to realise</h6>
                              <p className="sm-mb-5 d-block">Remind yourself you have nowhere to go except. </p> 
                              <span className="mb-0">by - <b className="text-success">PGSinfotech</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-dark mb-0"><b>5,446</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-success mb-0"><b>$436</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                        </div> 
                      <div className="tab-pane fade" id="year" role="tabpanel" aria-labelledby="year-tab">
                        <div className="row mb-30">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/09.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">Walk out 10 years into</h6>
                              <p className="sm-mb-5 d-block">Understanding the price and having the willingness to pay. </p> 
                              <span className="mb-0">by - <b className="text-danger">TheZayka</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-dark mb-0"><b>12,549</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="theme-color mb-0"><b>$1,656</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                        <div className="row mb-30">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/06.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">Step out on to the path</h6>
                              <p className="sm-mb-5 d-block">Success to you and then pull it out when you are.</p> 
                              <span className="mb-0">by - <b className="text-info">CarDealer</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-primary mb-0"><b>1,366</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-secondary mb-0"><b>$4,536</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                          <div className="row mb-30">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/07.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">Briefly imagine that you</h6>
                              <p className="sm-mb-5 d-block">Motivators for your personality and your personal goals. </p> 
                              <span className="mb-0">by - <b className="text-success">SamMartin</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-success mb-0"><b>465</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-danger mb-0"><b>$499</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                          <div className="row">
                           <div className="col-md-2 col-sm-6">
                             <img className="img-fluid" src="images/blog/08.jpg" alt="" />
                           </div>
                           <div className="col-md-6 col-sm-6">
                              <h6 className="mb-0 sm-mt-5">You continue doing what</h6>
                              <p className="sm-mb-5 d-block">The first thing to remember about success is that. </p> 
                              <span className="mb-0">by - <b className="text-warning">Cosntro</b> </span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                            <h5 className="text-warning mb-0"><b>4,456</b></h5>
                             <span>Sales</span>
                           </div>
                           <div className="col-md-2 col-sm-6 col-6 sm-mt-20">
                             <h5 className="text-info mb-0"><b>$6,485</b></h5>
                             <span>Revenue</span>
                           </div>
                          </div>
                      </div>
                    </div> 
                </div>
             </div>
          </div>
        </div>
      </div>
       {/* <!-- Widgets3 - Customer Feedback and Best Sellers END   --> */}
          
      </div>
    )
  }
};
export default DashboardWidget3;
