import React from 'react';
import './App.css';
import CubeContainer from './components/CubeContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">▣</span> CubeMaster 3D
            </div>
            <button className="btn">Help</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Interactive 3D Puzzle</div>
            
            <h1 className="title">CubeMaster 3D</h1>
            
            <div className="description">
              Explore, manipulate and solve the classic Rubik's cube in an immersive 3D environment.
            </div>
          </div>
          
          {/* Main Cube Container Component */}
          <CubeContainer />
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="btn btn-large">Start Solving</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;