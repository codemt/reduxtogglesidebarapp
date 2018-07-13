import React, { Component } from'react';

 class DashboardWidget5 extends Component {
  render() {
    return (
      <div>
                {/* <!-- Widgets5  - Calender , Event ,    --> */}     
    <div className="calendar-main mb-30">
    <div className="row">
      <div className="col-lg-3">
        <div className="row">
            <div className="col-12 sm-mb-30">
                <a href="#" data-toggle="modal" data-target="#add-category" className="btn btn-primary btn-block m-t-20">
                        <i className="fa fa-plus pr-2"></i> Create New
                    </a>
                <div id="external-events" className="m-t-20">
                    <br />
                    <p className="text-muted">Drag and drop your event or click in the calendar</p>
                    <div className="external-event bg-success fc-event">
                        <i className="fa fa-circle mr-2 vertical-middle"></i>New Theme Release
                    </div>
                    <div className="external-event bg-info fc-event">
                        <i className="fa fa-circle mr-2 vertical-middle"></i>My Event
                    </div>
                    <div className="external-event bg-warning fc-event">
                        <i className="fa fa-circle mr-2 vertical-middle"></i>Meet manager
                    </div>
                    <div className="external-event bg-danger fc-event">
                        <i className="fa fa-circle mr-2 vertical-middle"></i>Create New theme
                    </div>
                </div>
            </div>
        </div>
    </div>
      <div className="col-lg-9">
          <div id="calendar"></div>
           <div className="modal" tabIndex="-1" role="dialog" id="event-modal">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Add New Event</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span></button>
                      </div>
                      <div className="modal-body p-20"></div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-success save-event">Create event</button>
                          <button type="button" className="btn btn-danger delete-event" data-dismiss="modal">Delete</button>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Modal Add Category --> */}
          <div className="modal" tabIndex="-1" role="dialog" id="add-category">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title">Add a category</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      </div>
                      <div className="modal-body p-20">
                          <form>
                              <div className="row">
                                  <div className="col-md-6">
                                      <label className="control-label">Category Name</label>
                                      <input className="form-control form-white" placeholder="Enter name" type="text" name="category-name" />
                                  </div>
                                  <div className="col-md-6">
                                      <label className="control-label">Choose Category Color</label>
                                      <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                          <option value="success">Success</option>
                                          <option value="danger">Danger</option>
                                          <option value="info">Info</option>
                                          <option value="primary">Primary</option>
                                          <option value="warning">Warning</option>
                                      </select>
                                  </div>
                              </div>
                          </form>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-success save-category" data-dismiss="modal">Save</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
 </div>
 {/* <!-- Widgets5  END  - Calender , Event ,    --> */}  
          
        
      </div>
    )
  }
};
export default DashboardWidget5;
