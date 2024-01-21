import React, { useState } from 'react';

const Navbar = () => { //logic for top part of screen
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav style={{ backgroundColor: '#3761a5', padding: '25px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <img src="Logo.png" alt="Logo" style={{ height: '90px', width: 'auto' }} />
      </div>
      <div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px',  marginLeft: '-250px'}}>
          <li>
            <a target="_blank" href="https://recreation.ucsc.edu/facilities/index.html" style={{textDecoration: 'none', color: isHovered ? 'white' : '#F1C842', fontFamily: 'San Francisco, sans-serif', fontSize: '32px', cursor: 'pointer',
                transition: 'color 0.25s'}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
              Schedules
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;