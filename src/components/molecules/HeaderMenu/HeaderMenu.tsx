import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, FileExclamationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to={'/'}>Home</Link>
      </Menu.Item>
      <Menu.SubMenu key="SubMenu" title="Redux" icon={<FileExclamationOutlined />}>
        <Menu.Item key="userSlice" icon={<AppstoreOutlined />}>
          <Link to={'/reduxtest'}>userSlice redux toolkit</Link>
        </Menu.Item>
        <Menu.Item key="userSlice" icon={<AppstoreOutlined />}>
          <Link to={'/reserv'}>Reservations redux</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default HeaderMenu;
