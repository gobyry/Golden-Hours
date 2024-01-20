import React from 'react';

const EastGymStatus = ({ imageSrc }) => {
  const { isOpen, message } = isGymOpen();

  function isGymOpen() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHour = now.getHours();

    const schedule = {
      0: { open: 8, close: 20 }, // Sunday
      1: { open: 6, close: 23 }, // Monday
      2: { open: 6, close: 23 }, // Tuesday
      3: { open: 6, close: 23 }, // Wednesday
      4: { open: 6, close: 23 }, // Thursday
      5: { open: 6, close: 22 }, // Friday
      6: { open: 8, close: 20 }, // Saturday
    };

    const daySchedule = schedule[currentDay];

    const { open, close } = daySchedule;
    const isGymOpen = currentHour >= open && currentHour < close;
    const message = isGymOpen ? 'Open' : 'Closed';

    return { isOpen: isGymOpen, message };
  }

  return (
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

export default EastGymStatus;