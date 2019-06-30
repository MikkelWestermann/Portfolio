import React, { useState, useEffect } from 'react';
import Menu from './menu'
import { Drawer, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { 
  watchViewport, 
  unwatchViewport
} from 'tornis';

import './styles.scss';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState();
  
  useEffect(() => {
    watchViewport(tornis)

    return () => {
      unwatchViewport(tornis)
    }
  }, [])

  const tornis = ({ scroll }) => {
    if (scroll.changed) {
      setScroll(scroll)
    }
  }

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    return (
        <nav className={`menuBar ${scroll && scroll.top > 50 ? 'scrolled-menubar' : ''}`}>
          <div className="logo">
            <Link to='/'><span>{'<Home />'}</span></Link>
          </div>
          <div className="menuCon">
            <div className="rightMenu">
                <Menu />
            </div>
            <Button className="barsMenu" type="primary" onClick={showDrawer}>
              <Icon type="menu" />
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