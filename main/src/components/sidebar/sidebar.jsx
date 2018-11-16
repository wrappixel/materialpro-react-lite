import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav
} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import profilephoto from '../../assets/images/users/1.jpg';
import bgimage from '../../assets/images/background/user-info.jpg';

const sidebarBackground = {
  backgroundImage: 'url(' + bgimage + ')',
  backgroundRepeat: 'no-repeat'
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.expandLogo = this.expandLogo.bind(this);
    this.activeRoute.bind(this);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  /*--------------------------------------------------------------------------------*/
  /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
  /*--------------------------------------------------------------------------------*/
  expandLogo() {
    document.getElementById('logobg').classList.toggle('expand-logo');
  }
  /*--------------------------------------------------------------------------------*/
  /*Verifies if routeName is the one active (in browser input)                      */
  /*--------------------------------------------------------------------------------*/
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1
      ? 'selected'
      : '';
  }

  render() {
    return (
      <aside
        className="left-sidebar"
        id="sidebarbg"
        data-sidebarbg="skin6"
        onMouseEnter={this.expandLogo}
        onMouseLeave={this.expandLogo}
      >
        <div className="scroll-sidebar">
          <PerfectScrollbar className="sidebar-nav">
            <div className="user-profile" style={sidebarBackground}>
              <div className="profile-img">
                <img src={profilephoto} alt="user" />
              </div>
            </div>
            {/*--------------------------------------------------------------------------------*/}
            {/* Sidebar Menus will go here                                                     */}
            {/*--------------------------------------------------------------------------------*/}
            <Nav id="sidebarnav">
              {this.props.routes.map((prop, key) => {
                if (prop.redirect) {
                  return null;
                } else {
                  return (
                    /*--------------------------------------------------------------------------------*/
                    /* Adding Sidebar Item                                                            */
                    /*--------------------------------------------------------------------------------*/
                    <li
                      className={
                        this.activeRoute(prop.path) +
                        (prop.pro ? ' active active-pro' : '') +
                        ' sidebar-item'
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.path}
                        className="sidebar-link"
                        activeClassName="active"
                      >
                        <i className={prop.icon} />
                        <span className="hide-menu">{prop.name}</span>
                      </NavLink>
                    </li>
                  );
                }
              })}
            </Nav>
          </PerfectScrollbar>
        </div>
      </aside>
    );
  }
}
export default Sidebar;
