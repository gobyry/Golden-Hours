import React from 'react';

const WestGymStatus = ({ imageSrc }) => {
  const { isOpen, message } = isGymOpen();

  function isGymOpen() {
    const now = new Date();
    const currentDay = now.getDay();  //day of the week 0-6
    const currentHour = now.getHours(); //hours 0-23
    const x = now.getDate(); //current day numerical
    const y = now.getMonth(); //current month represented from 0-11 (jan-dec)

    const schedule = {
      0: { open: 11, close: 18 }, // Sunday
      1: { open: 9, close: 23 }, // Monday
      2: { open: 9, close: 23 }, // Tuesday
      3: { open: 9, close: 23 }, // Wednesday
      4: { open: 9, close: 23 }, // Thursday
      5: { open: 9, close: 22 }, // Friday
      6: { open: 11, close: 18 }, // Saturday
    };

    const daySchedule = schedule[currentDay];

    const { open, close } = daySchedule;
    const isGymOpen = (currentHour >= open && currentHour < close) && (x!=10 && x!=23 && x!=24 || y!=10) && (x<16 || y!=11) && (x>=5 && x!=15 || y!=0) && (x!=19 || y!=1) && (x<23 || y!= 2) && (x!=27 || y!=4) && (x<14 || y!=5) && y!=6 && y!=7 && (x>=28 || y!=8); //accounts for holidays and this years breaks
    const message = isGymOpen ? 'Open' : 'Closed';

    return { isOpen: isGymOpen, message };
  }

  return ( //image attributes and closed/open logic for west gym
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src={imageSrc} alt="Gym Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {isOpen ? (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'green', fontWeight: 'bold', fontSize: '96px' }}>{message}</p>
        </div>
      ) : (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'red', fontWeight: 'bold', fontSize: '96px' }}>{message}</p>
        </div>
      )}
    </div>
  );
};

export default WestGymStatus;