// FileName: Song.js

import React from "react";

const Song = ({  }) => {
  const currentSong = {
    id: 1,
    name: "Chal Kudiye",
    time: "1 min ago",
    img_url:
      "https://c.saavncdn.com/064/Chal-Kudiye-From-Jigra-Hindi-2024-20240918073952-150x150.jpg",
  };

  return (
    <div className="song-container">
      <div>Hellow Songs</div>
      <img src={currentSong.img_url} alt={currentSong.name} />
      <h2>{currentSong?.name}</h2>
      <h3>{currentSong?.artist}</h3>
    </div>
  );
};

export default Song;
