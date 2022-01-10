import React from 'react';
import './App.css';
import { Menu } from './features/Menu/Menu';
import { Content } from './features/Content/Content'
import { Footer } from './features/Footer/Footer';

function App() {
  return (
    <div className="App ">
        <Menu />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
