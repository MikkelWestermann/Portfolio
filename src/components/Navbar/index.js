import React, { useState, useEffect } from 'react';
import Menu from './menu'
import { Drawer, Button, Icon, Modal, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { 
  watchViewport, 
  unwatchViewport
} from 'tornis';

import './styles.scss';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState();
  const [responsivenessCheck, setResponsivenessCheck] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    const tornis = ({ size, scroll }) => {
      if (scroll.changed) {
        setScroll(scroll)
      }
      
      if (windowWidth && Math.abs(windowWidth - size.x) > 100) {
        setResponsivenessCheck(true)
        setWindowWidth(false)
      }
    }
    watchViewport(tornis)
    
    return () => {
      unwatchViewport(tornis)
    }
  }, [windowWidth])

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
      <nav className={`menuBar ${scroll && scroll.top > 50 ? 'scrolled-menubar' : ''}`}>
        <div className="logo">
          <Link onClick={() => window.scrollTo(0,0)} to='/'><span>{'<Home />'}</span></Link>
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
            <Menu sidebar={true}  onClose={onClose} />
          </Drawer>
        </div>
        <Modal
          title='Testing responseiveness?'
          visible={responsivenessCheck && localStorage.getItem('doNotShowResponsivenessCheck') !== 'true'}
          onCancel={() => setResponsivenessCheck(false)}
          footer={false}
        >
          <p>Cool! You might have to reload the page to get all the awesome (<a href='https://github.com/alexfoxy/laxxx'>Lax.js</a>) scroll animations, though. They behave based on the initial viewport size</p>
          <Button block type='primary' onClick={() => window.location.reload()}>Reload <Icon type="reload" /></Button>
          <Checkbox style={{ marginTop: 25 }} onChange={e => localStorage.setItem('doNotShowResponsivenessCheck', e.target.checked)} >Don't show again</Checkbox>
        </Modal>
      </nav>
    );
}
export default Navbar;