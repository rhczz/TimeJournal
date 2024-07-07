import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '首页',
    key: '/',
    icon: <MailOutlined />,
  },
  {
    label: '照片',
    key: '/photo/photo',
    icon: <MailOutlined />,
    disabled: false,
  }
];

interface NavbarProps {
  selectedKey: string;
  onNavigate: (key: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedKey, onNavigate }) => {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    onNavigate(e.key);
    // 使用 useNavigate 进行路由跳转
    navigate(e.key);
  };

  return <Menu onClick={handleClick} selectedKeys={[selectedKey]} mode="horizontal" items={items} />;
};

export default Navbar;
