import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

// 自动导入所有页面组件
const requireComponent = require.context('./pages', true, /\.tsx?$/);

interface RouteConfig {
  path: string;
  component: React.ComponentType<any>;
}

const routes: RouteConfig[] = requireComponent.keys().map((fileName: string) => {
  const componentName = fileName.replace('./', '').replace(/\.(js|jsx|ts|tsx)$/, '');
  const Component = requireComponent<{ default: React.ComponentType<any> }>(fileName).default;
  return { path: `/${componentName.toLowerCase()}`, component: Component };
});

// 将 Home 组件配置在根路径
routes.unshift({ path: '/', component: Home });

const AppRoutes: React.FC = () => (
  <Routes>
    {routes.map(({ path, component }, index) => (
      <Route key={index} path={path} element={React.createElement(component)} />
    ))}
  </Routes>
);

export default AppRoutes;
