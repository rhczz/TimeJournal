import React, { useState } from 'react';
import { CameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import './HomeNavbar.css'; // 导入样式文件

type MenuItem = {
  label: string;
  key: string;
  icon?: JSX.Element;
  disabled?: boolean;
};

const items: MenuItem[] = [
  {
    label: '照片',
    key: '/photo/photo',
    icon: <CameraOutlined />,
    disabled: false,
  },
  {
    label: '照片',
    key: '/photo/photo',
    icon: <CameraOutlined />,
    disabled: false,
  },
  {
    label: '照片',
    key: '/photo/photo',
    icon: <CameraOutlined />,
    disabled: false,
  },
  {
    label: '照片',
    key: '/photo/photo',
    icon: <CameraOutlined />,
    disabled: false,
  },
  {
    label: '照片',
    key: '/photo/photo',
    icon: <CameraOutlined />,
    disabled: false,
  },
  // 可以添加更多菜单项
];

interface HomeNavbarProps {
  onNavigate: (key: string) => void;
  className?: string; // 声明 className 属性
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('/');

  const handleClick = (e: any) => {
    setCurrent(e.key);
    // 使用 useNavigate 进行路由跳转
    navigate(e.key);
    onNavigate(e.key); // 将选中项状态传递给父组件
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="home-navbar"
      theme="dark" // 使菜单的主题为暗色
    >
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default HomeNavbar;
