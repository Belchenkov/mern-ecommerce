import React, { useState } from 'react';
import { Menu } from 'antd';
import {
    LoginOutlined,
    HomeOutlined,
    UserAddOutlined, SettingOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const Header = () => {
    const { SubMenu, Item } = Menu;
    const [current, setCurrent] = useState('home');

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu
            theme="dark"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
        >
            <Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Item>
            <Item
                className="float-right"
                key="register"
                icon={<UserAddOutlined />}
            >
                <Link to="/register">Register</Link>
            </Item>
            <Item
                className="float-right"
                key="login"
                icon={<LoginOutlined />}
            >
                <Link to="/login">Login</Link>
            </Item>

            <SubMenu
                icon={<SettingOutlined />}
                title="Username"
            >
                <Item key="setting:1">Option 1</Item>
                <Item key="setting:2">Option 2</Item>
            </SubMenu>
        </Menu>
    );
};

export default Header;