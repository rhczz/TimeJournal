import React, { useState } from 'react';
import { ConfigProvider, theme, Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';
import zh_CN from 'antd/locale/zh_CN';
import Home from './pages/home/Home';
import Navbar from './components/nav/Navbar';

const { Content } = Layout;

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [selectedKey, setSelectedKey] = useState('/');

  const handleNavigate = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <ConfigProvider
      locale={zh_CN}
      theme={{
        algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <Router>
        <Layout style={{ minHeight: '100vh', minBlockSize: '100vh' }}>
          {showNavbar && <Navbar selectedKey={selectedKey} onNavigate={handleNavigate} />}
          <Content style={{ padding: 0 }}>
            <Routes>
              <Route path="/" element={<Home setShowNavbar={setShowNavbar} onNavigate={handleNavigate} />} />
              <Route path="/*" element={<AppRoutes />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
