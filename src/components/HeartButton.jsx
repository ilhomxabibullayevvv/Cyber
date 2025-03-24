import React, { useState } from 'react';
import './HeartButton.css';

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      className={`heart ${liked ? 'liked' : ''}`}
      onClick={toggleLike}
    >
      {liked ? '❤️' : '🤍'} { }
    </button>
  );
};

export default HeartButton;
