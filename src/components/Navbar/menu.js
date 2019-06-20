import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const MenuComponent = ({ sidebar }) => {
  return (
    <Menu mode={sidebar ? 'vertical' : 'horizontal'}>
      <Menu.Item key="mail">
        <Link to='/projects'>Projects</Link>
      </Menu.Item>
      <SubMenu title={<span>Demos</span>}>
        <MenuItemGroup title="Backend">
          <Menu.Item key="url-shortener"><Link to='/demos/url-shortener'>Url Shortener</Link></Menu.Item>
          <Menu.Item key="email-scheduler"><Link to='/demos/email-scheduler'>Email Scheduler</Link></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href='#contact'>Contact</a>
      </Menu.Item>
    </Menu>
  );
}
export default MenuComponent;