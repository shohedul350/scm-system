import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from '../../components/uielements/menu';
import IntlMessages from '../../components/utility/intlMessages';
import SidebarWrapper from './sidebar.style';

import appActions from '../../redux/app/actions';
import Logo from '../../components/utility/logo';
import { rtl } from '../../config/withDirection';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;

const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed
} = appActions;
const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }
  handleClick(e) {
    this.props.changeCurrent([e.key]);
    if (this.props.app.view === 'MobileView') {
      setTimeout(() => {
        this.props.toggleCollapsed();
        this.props.toggleOpenDrawer();
      }, 100);
    }
  }
  onOpenChange(newOpenKeys) {
    const { app, changeOpenKeys } = this.props;
    const latestOpenKey = newOpenKeys.find(
      key => !(app.openKeys.indexOf(key) > -1)
    );
    const latestCloseKey = app.openKeys.find(
      key => !(newOpenKeys.indexOf(key) > -1)
    );
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    changeOpenKeys(nextOpenKeys);
  }
  getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  renderView({ style, ...props }) {
    const viewStyle = {
      marginRight: rtl === 'rtl' ? '0' : '-17px',
      paddingRight: rtl === 'rtl' ? '0' : '9px',
      marginLeft: rtl === 'rtl' ? '-17px' : '0',
      paddingLeft: rtl === 'rtl' ? '9px' : '0'
    };
    return (
      <div className="box" style={{ ...style, ...viewStyle }} {...props} />
    );
  }

  render() {
    // const { url, app, toggleOpenDrawer, bgcolor } = this.props;
    const { app, toggleOpenDrawer, customizedTheme } = this.props;
    const url = stripTrailingSlash(this.props.url);
    const collapsed = clone(app.collapsed) && !clone(app.openDrawer);
    const { openDrawer } = app;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const onMouseEnter = event => {
      if (openDrawer === false) {
        toggleOpenDrawer();
      }
      return;
    };
    const onMouseLeave = () => {
      if (openDrawer === true) {
        toggleOpenDrawer();
      }
      return;
    };
    const scrollheight = app.height;
    const styling = {
      backgroundColor: customizedTheme.backgroundColor
    };
    const submenuStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: customizedTheme.textColor
    };
    const submenuColor = {
      color: customizedTheme.textColor
    };
    return (
      <SidebarWrapper>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
          width="240"
          className="isomorphicSidebar"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={styling}
        >
          <Logo collapsed={collapsed} />
          <Scrollbars
            renderView={this.renderView}
            style={{ height: scrollheight - 70 }}
          >
            <Menu
              onClick={this.handleClick}
              theme="dark"
              mode={mode}
              openKeys={collapsed ? [] : app.openKeys}
              selectedKeys={app.current}
              onOpenChange={this.onOpenChange}
              className="isoDashboardMenu"
            >
             

            
              <SubMenu
                key="product"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-document" />
                    <span className="nav-text">
                     PRODUCT
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="stock">
                  <Link style={submenuColor} to={'/dashboard/stock'}>
                  STOCK
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="addProduct">
                  <Link style={submenuColor} to={'/dashboard/add-product'}>
                    ADD PRODUCT
                  </Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="customer"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-document" />
                    <span className="nav-text">
                     Customer
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="stock">
                  <Link style={submenuColor} to={'/dashboard/create-customer'}>
                  Create Customer
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="addProduct">
                  <Link style={submenuColor} to={'/dashboard/customer-list'}>
                    Customer List
                  </Link>
                </Menu.Item>
              </SubMenu>
{/* 
              <SubMenu
                key="invoice"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-document" />
                    <span className="nav-text">
                     BILL/INVOICE
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="invoice">
                  <Link style={submenuColor} to={'/dashboard/invoice'}>
                   NEW INVOICE
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="500">
                  <Link style={submenuColor} to={'/500'}>
                   INVOICE REPORT
                  </Link>
                </Menu.Item>
      
               
              
              </SubMenu> */}

{/* 
                <Menu.Item key="invoice">
                <Link  to={`${url}/invoice`}>
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-clipboard" />
                    <span className="nav-text">
                    <IntlMessages id="sidebar.invoice" />
                    </span>
                  </span>
                </Link>
              </Menu.Item> */}

             

              <SubMenu
                key="pages"
                title={
                  <span className="isoMenuHolder" style={submenuColor}>
                    <i className="ion-document" />
                    <span className="nav-text">
                      <IntlMessages id="sidebar.pages" />
                    </span>
                  </span>
                }
              >
                <Menu.Item style={submenuStyle} key="404">
                  <Link style={submenuColor} to={'/404'}>
                    <IntlMessages id="sidebar.404" />
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="500">
                  <Link style={submenuColor} to={'/500'}>
                    <IntlMessages id="sidebar.500" />
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="signin">
                  <Link style={submenuColor} to={'/signin'}>
                    <IntlMessages id="sidebar.signIn" />
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="signup">
                  <Link style={submenuColor} to={'/signup'}>
                    <IntlMessages id="sidebar.signUp" />
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="forgotpassword">
                  <Link style={submenuColor} to={'/forgotpassword'}>
                    <IntlMessages id="sidebar.forgotPw" />
                  </Link>
                </Menu.Item>
                <Menu.Item style={submenuStyle} key="resetpassword">
                  <Link style={submenuColor} to={'/resetpassword'}>
                    <IntlMessages id="sidebar.resetPw" />
                  </Link>
                </Menu.Item>
              
              </SubMenu>
           

              {/* {getDevSidebar(url, submenuColor)} */}
            </Menu>
          </Scrollbars>
        </Sider>
      </SidebarWrapper>
    );
  }
}

export default connect(
  state => ({
    app: state.App.toJS(),
    customizedTheme: state.ThemeSwitcher.toJS().sidebarTheme
  }),
  { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed }
)(Sidebar);
