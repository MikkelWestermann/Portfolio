import React, { Component } from 'react';
import Menu from './menu'
import { Drawer, Button } from 'antd';

import { Link } from 'react-router-dom';

import './styles.scss';

class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
        <nav className="menuBar">
          <div className="logo">
            <Link to='/'>Logo</Link>
          </div>
          <div className="menuCon">
            <div className="rightMenu">
                <Menu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Menu sidebar={true} />
            </Drawer>
</div>
        </nav>
    );
  }
}
export default Navbar;