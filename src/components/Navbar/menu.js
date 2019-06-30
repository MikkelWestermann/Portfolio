import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const MenuComponent = ({ sidebar }) => {
  return (
    <Menu mode={sidebar ? 'vertical' : 'horizontal'}>
      <Menu.Item key="projects">
        <Link to='/projects'>Projects</Link>
        <div className='nav-background-circle' />
      </Menu.Item>
      <SubMenu title={<div><span>Demos</span><div className='nav-background-circle' /></div>}>
        <MenuItemGroup title="Backend">
          <Menu.Item key="url-shortener"><Link to='/demos/url-shortener'>Url Shortener</Link></Menu.Item>
          <Menu.Item key="email-scheduler"><Link to='/demos/email-scheduler'>Email Scheduler</Link></Menu.Item>
        </MenuItemGroup>
        <div className='nav-background-circle' />
      </SubMenu>
      <Menu.Item key="contact">
        <a href='/#contact'>Contact</a>
        <div className='nav-background-circle' />
      </Menu.Item>
    </Menu>
  );
}
export default MenuComponent;