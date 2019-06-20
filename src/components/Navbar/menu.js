import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const MenuComponent = ({ sidebar }) => {
  return (
    <Menu mode={sidebar ? 'vertical' : 'horizontal'}>
      <Menu.Item key="mail">
        <Link to='/'>Projects</Link>
      </Menu.Item>
      <SubMenu title={<span>Demos</span>}>
        <MenuItemGroup title="Backend">
          <Menu.Item key="setting:1">Url Shortener</Menu.Item>
          <Menu.Item key="setting:2">Email Scheduler</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <Link to='/'>Contact</Link>
      </Menu.Item>
    </Menu>
  );
}
export default MenuComponent;