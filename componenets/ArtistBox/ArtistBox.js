import React from "react";

const ArtistBox = ({ artist }) => {
  console.log(artist);

  return (
    <div className="artistbox">
      <img src={artist.images[2].url} alt="" className="artistbox__image" />
      <p>{artist.name}</p>
    </div>
  );
};

export default ArtistBox;
