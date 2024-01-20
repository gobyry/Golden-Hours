import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import EastGymStatus from './EastGymStatus';
import WestGymStatus from './WestGymStatus';
import Navbar from './Navbar';
import './index.css';

const App = () => {
  const [isHoveredWestGym, setIsHoveredWestGym] = useState(false);
  const [isHoveredEastFieldHouse, setIsHoveredEastFieldHouse] = useState(false);
  const [isHoveredEastGym, setIsHoveredEastGym] = useState(false);

  return (
    <div>
    <Navbar />
    <div style={{ display: 'flex', height: '100vh', backgroundImage: 'url("background.jpg")', backgroundSize: '2200px 1080px', backgroundRepeat: 'no-repeat'}}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
      <h1> <a target="_blank" href="https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=dce84fd0-83b4-4dbc-8f0e-5b614adf3f88" style={{textDecoration: 'none', color: isHoveredWestGym ? 'white' : '#F1C842', cursor: 'pointer',
              transition: 'color 0.25s', fontSize: '32px'}}
              onMouseEnter={() => setIsHoveredWestGym(true)}
              onMouseLeave={() => setIsHoveredWestGym(false)}>
              West Gym
            </a> </h1>
        <WestGymStatus imageSrc="westcourt.jpg" />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
      <h1> <a target="_blank" href="https://recreation.ucsc.edu/facilities/src-east.html" style={{textDecoration: 'none', color: isHoveredEastFieldHouse ? 'white' : '#F1C842', cursor: 'pointer',
              transition: 'color 0.25s', fontSize: '32px'}}
              onMouseEnter={() => setIsHoveredEastFieldHouse(true)}
              onMouseLeave={() => setIsHoveredEastFieldHouse(false)}>
              East Field House
            </a> </h1>
      <EastGymStatus imageSrc="eastgym.png" />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px' }}>
      <h1> <a target="_blank" href="https://campusrec.ucsc.edu/Facility/GetSchedule?facilityId=bd6cf7a0-9924-4821-84d7-5a995cc63081" style={{textDecoration: 'none', color: isHoveredEastGym ? 'white' : '#F1C842', cursor: 'pointer',
              transition: 'color 0.25s', fontSize: '32px'}}
              onMouseEnter={() => setIsHoveredEastGym(true)}
              onMouseLeave={() => setIsHoveredEastGym(false)}>
              East Gym
            </a> </h1>
        <EastGymStatus imageSrc="eastcourt.jpg" />
      </div>
    </div>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));