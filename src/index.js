import React from 'react';
import ReactDOM from 'react-dom';
import EastGymStatus from './EastGymStatus';
import WestGymStatus from './WestGymStatus';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', margin: '20px' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
        <h1>West Court</h1>
        <WestGymStatus imageSrc="westcourt.jpg" />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
        <h1>East Gym</h1>
        <EastGymStatus imageSrc="eastgym.png" />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
        <h1>East Court</h1>
        <EastGymStatus imageSrc="eastcourt.jpg" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));