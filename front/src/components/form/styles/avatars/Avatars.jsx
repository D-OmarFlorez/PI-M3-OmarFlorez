import React, { useState } from 'react';

const Avatar = () => {
  const avatars = [
    
    'https://www.vhv.rs/dpng/f/421-4212939_rick-and-morty-portal-png.png',
    'https://i.pinimg.com/474x/7f/d3/0e/7fd30ef3823ed642263a7fc6c52cf96f.jpg',
    'https://i.pinimg.com/474x/ee/5d/57/ee5d57f31b41d9a68df5a5b85526266b.jpg',
    'https://i.pinimg.com/474x/94/59/ed/9459ed0e310f9a38ede8cdfaf0c3b8c5.jpg',
    'https://i.pinimg.com/564x/ed/17/91/ed17914ce4d2792ad49dd355836a6079.jpg',
   'https://i.pinimg.com/474x/d6/ec/a6/d6eca6cfcfcd6b2168ce136389fe16a6.jpg'
  ];

  const [currentAvatar, setCurrentAvatar] = useState(0);
  

  const handleClick = () => {
    setCurrentAvatar((currentAvatar + 1) % avatars.length);

};

  return (
    <div>
        <div>
    <img
    src={avatars[currentAvatar]}
      alt="avatar"
      style={{ width: '50%', height: '50%', borderRadius: '100%', position:"auto"
 }}
      />  
    
    
    </div>
    <button style={{
        
    }} onClick={handleClick}>🔀
    </button>
    </div>
  );
};

export default Avatar;
