import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
 class SideBar extends Component {
  render() {
    return (
      <div>
            {/* <!-- Left Sidebar start--> */}
    <div className="side-menu-fixed">
     <div className="scrollbar side-menu-bg">
      <ul className="nav navbar-nav side-menu" id="sidebarnav">
        {/* <!-- menu item Dashboard--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#dashboard">
            <div className="pull-left"><i className="ti-home"></i><span className="right-nav-text">Dashboard</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          
          <ul id="dashboard" className="collapse" data-parent="#sidebarnav">
             <li> <Link to='/'>Overview </Link> </li> 
            <li> <Link to='/overview1'>Overview 02</Link>  </li>
            <li> <Link to='/overview2'>Overview 03</Link> </li>
            <li> <Link to='/overview3'>Dashboard 04</Link></li>
            <li> <Link to='/overview4'>Dashboard 05</Link></li>
          </ul>

        </li>
        {/* <!-- menu title --> */}
         <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">Components </li>
        {/* <!-- menu item Elements--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#elements">
            <div className="pull-left"><i className="ti-palette"></i><span className="right-nav-text">Elements</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="elements" className="collapse" data-parent="#sidebarnav">
            <li><a href="accordions.html">Accordions</a></li>
            <li><a href="alerts.html">Alerts</a></li>
            <li><a href="button.html">Button</a></li>
            <li><a href="colorpicker.html">Colorpicker</a></li>
            <li><a href="dropdown.html">Dropdown</a></li>
            <li><a href="lists.html">lists</a></li>
            <li><a href="modal.html">modal</a></li>
            <li><a href="nav.html">nav</a></li>
            <li><a href="nicescroll.html">nicescroll</a></li>
            <li><a href="pricing-table.html">pricing table</a></li>
            <li><a href="ratings.html">ratings</a></li>
            <li><a href="date-picker.html">date picker</a></li>
            <li><a href="tabs.html">tabs</a></li>
            <li><a href="typography.html">typography</a></li>
            <li><a href="popover-tooltips.html">Popover tooltips</a></li>
            <li><a href="progress.html">progress</a></li>
            <li><a href="switch.html">switch</a></li>
            <li><a href="sweetalert2.html">sweetalert2</a></li>
            <li><a href="touchspin.html">touchspin</a></li>
          </ul>
        </li>
        {/* <!-- menu item calendar--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#calendar-menu">
            <div className="pull-left"><i className="ti-calendar"></i><span className="right-nav-text">calendar</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="calendar-menu" className="collapse" data-parent="#sidebarnav">
            <li> <a href="calendar.html">Events Calendar </a> </li>
            <li> <a href="calendar-list.html">List Calendar</a> </li>
          </ul>
        </li>
        {/* <!-- menu item todo--> */}
        <li>
          <a href="todo-list.html"><i className="ti-menu-alt"></i><span className="right-nav-text">Todo list</span> </a>
        </li>
         {/* <!-- menu item chat--> */}
         <li> 
           <a href="chat-page.html"><i className="ti-comments"></i><span className="right-nav-text">Chat </span></a>  
         </li>
         {/* <!-- menu item mailbox--> */}
        <li>
          <a href="mail-box.html"><i className="ti-email"></i><span className="right-nav-text">Mail box</span> <span className="badge badge-pill badge-warning float-right mt-1">HOT</span> </a>
        </li>
        {/* <!-- menu item Charts--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#chart">
            <div className="pull-left"><i className="ti-pie-chart"></i><span className="right-nav-text">Charts</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="chart" className="collapse" data-parent="#sidebarnav">
            <li> <a href="chart-js.html">Chart.js</a> </li>
            <li> <a href="chart-morris.html">Chart morris </a> </li>
            <li> <a href="chart-sparkline.html">Chart Sparkline</a> </li>
          </ul>
        </li>
        
        {/* <!-- menu font icon--> */}
         <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#font-icon">
            <div className="pull-left"><i className="ti-home"></i><span className="right-nav-text">font icon</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="font-icon" className="collapse" data-parent="#sidebarnav">
            <li> <a href="fontawesome-icon.html">font Awesome</a> </li>
            <li> <a href="themify-icons.html">Themify icons</a> </li>
            <li> <a href="weather-icon.html">Weather icons</a> </li>
          </ul>
        </li>
        {/* <!-- menu title --> */}
        <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">Widgets, Forms & Tables </li>
        {/* <!-- menu item Widgets--> */}
        <li>
          <a href="widgets.html"><i className="ti-blackboard"></i><span className="right-nav-text">Widgets</span> <span className="badge badge-pill badge-danger float-right mt-1">59</span> </a>
        </li>
        {/* <!-- menu item Form--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#Form">
            <div className="pull-left"><i className="ti-files"></i><span className="right-nav-text">Form & Editor</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="Form" className="collapse" data-parent="#sidebarnav">
            <li> <a href="editor.html">Editor</a> </li>
            <li> <a href="editor-markdown.html">Editor Markdown</a> </li>
            <li> <a href="form-input.html">Form input</a> </li>
            <li> <a href="form-validation-jquery.html">form validation jquery</a> </li>
            <li> <a href="form-wizard.html">form wizard</a> </li>
            <li> <a href="form-repeater.html">form repeater</a> </li>
            <li> <a href="input-group.html">input group</a> </li>
            <li> <a href="toastr.html">toastr</a> </li>
          </ul>
        </li>
        {/* <!-- menu item table --> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#table">
            <div className="pull-left"><i className="ti-layout-tab-window"></i><span className="right-nav-text">data table</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="table" className="collapse" data-parent="#sidebarnav">
            <li> <a href="data-html-table.html">Data html table</a> </li>
            <li> <a href="data-local.html">Data local</a> </li>
            <li> <a href="data-table.html">Data table</a> </li>
          </ul>
        </li>
        <li className="mt-10 mb-10 text-muted pl-4 font-medium menu-title">More Pages</li>
        {/* <!-- menu item Custom pages--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#custom-page">
            <div className="pull-left"><i className="ti-file"></i><span className="right-nav-text">Custom pages</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="custom-page" className="collapse" data-parent="#sidebarnav">
            <li> <a href="projects.html">projects</a> </li>
            <li> <a href="project-summary.html">Projects summary</a> </li>
            <li> <a href="profile.html">profile</a> </li>
            <li> <a href="app-contacts.html">App contacts</a> </li>
            <li> <a href="contacts.html">Contacts</a> </li>
            <li> <a href="file-manager.html">file manager</a> </li>
            <li> <a href="invoice.html">Invoice</a> </li>
            <li> <a href="blank.html">Blank page</a> </li>
            <li> <a href="layout-container.html">layout container</a> </li>
            <li> <a href="error.html">Error</a> </li>
            <li> <a href="faqs.html">faqs</a> </li>
          </ul>
        </li>
        {/* <!-- menu item Authentication--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#authentication">
            <div className="pull-left"><i className="ti-id-badge"></i><span className="right-nav-text">Authentication</span></div>
            <div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div>
          </a>
          <ul id="authentication" className="collapse" data-parent="#sidebarnav">
            <li> <a href="login.html">login</a> </li>
            <li> <a href="register.html">register</a> </li>
            <li> <a href="lockscreen.html">Lock screen</a> </li>
          </ul>
        </li>
        {/* <!-- menu item maps--> */}
        <li>
          <a href="maps.html"><i className="ti-location-pin"></i><span className="right-nav-text">maps</span> <span className="badge badge-pill badge-success float-right mt-1">06</span></a>
        </li>
        {/* <!-- menu item timeline--> */}
        <li>
          <a href="timeline.html"><i className="ti-panel"></i><span className="right-nav-text">timeline</span> </a>
        </li>
        {/* <!-- menu item Multi level--> */}
        <li>
          <a href="javascript:void(0);" data-toggle="collapse" data-target="#multi-level"><div className="pull-left"><i className="ti-layers"></i><span className="right-nav-text">Multi level Menu</span></div><div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></a>
          <ul id="multi-level" className="collapse" data-parent="#sidebarnav">
          <li>
            <a href="javascript:void(0);" data-toggle="collapse" data-target="#auth">Level item 1<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></a>
            <ul id="auth" className="collapse">
              <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#login">Level item 1.1<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></a>
                  <ul id="login" className="collapse">
                    <li>
                    <a href="javascript:void(0);" data-toggle="collapse" data-target="#invoice">level item 1.1.1<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></a>
                    <ul id="invoice" className="collapse">
                      <li> <a href="#">level item 1.1.1.1</a> </li>
                      <li> <a href="#">level item 1.1.1.2</a> </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li> <a href="#">level item 1.2</a> </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);" data-toggle="collapse" data-target="#error">level item 2<div className="pull-right"><i className="ti-plus"></i></div><div className="clearfix"></div></a>
            <ul id="error" className="collapse" >
              <li> <a href="#">level item 2.1</a> </li>
              <li> <a href="#">level item 2.2</a> </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div> 
</div> 

{/* <!-- Left Sidebar End--> */}
          
        
      </div>
    )
  }
};

export default SideBar;
