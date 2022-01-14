import React, { useEffect } from 'react';
import './App.css';
import { Menu } from './features/Menu/Menu';
import { Content } from './features/Content'
import { Footer } from './features/Footer/Footer';
import { useAppDispatch } from './app/hooks';
import { setIsMobile } from './features/mobileDetect'
import { isMobile } from 'react-device-detect'


function App() {

  const dispatch = useAppDispatch()
console.log('asdasd')
  useEffect(()=>{
      dispatch(setIsMobile(isMobile))
    
  }, [isMobile])
  
  return (
    <div className="App   scroll-smooth text-gray-600">
        <Menu />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
