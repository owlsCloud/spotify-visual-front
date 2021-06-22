const PlaylistBox = ({ playlist }) => {
  return (
    <div className="playlist">
      <img src={playlist.images[0].url} />
      <div className="playlist__name">{playlist.name}</div>
    </div>
  );
};
export default PlaylistBox;
