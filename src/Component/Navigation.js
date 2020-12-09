import React, { Component } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item icon={<MailOutlined />}>
                        <Link to="/">
                            go to list page
                        </Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to="/done">
                            go to done page
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navigation;