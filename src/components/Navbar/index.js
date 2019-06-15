import React, { useState } from 'react';
import Menu from './menu'
import { Drawer, Button } from 'antd';

import { Link } from 'react-router-dom';

import './styles.scss';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
        <nav className="menuBar">
          <div className="logo">
            <Link to='/'>Logo</Link>
          </div>
          <div className="menuCon">
            <div className="rightMenu">
                <Menu />
            </div>
            <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <span className="barsBtn" />
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Menu sidebar={true} />
            </Drawer>
          </div>
        </nav>
    );
}
export default Navbar;