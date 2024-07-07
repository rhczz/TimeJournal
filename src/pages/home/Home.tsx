import React, { useEffect } from 'react';
import './Home.css';
import HomeNavbar from '../../components/nav/HomeNavbar';

interface Props {
  setShowNavbar: (show: boolean) => void;
  onNavigate: (key: string) => void;
}

const Home: React.FC<Props> = ({ setShowNavbar, onNavigate }) => {
  useEffect(() => {
    setShowNavbar(false); // 首页不显示导航栏
    return () => {
      setShowNavbar(true); // 离开首页时恢复显示导航栏
    };
  }, [setShowNavbar]);

  return (
    <div>
      <div className='image-container'>
        <div className='content-container'>
            <img
            src="/static/logo.png"
            alt="TimeJournal"
            className='logo-img'
            onClick={() => setShowNavbar(true)}
            />  
            <HomeNavbar
                className='home-navbar'
                onNavigate={onNavigate} 
            />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
