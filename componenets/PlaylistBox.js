const PlaylistBox = ({ data }) => {
  return (
    <div className="playlist">
      <img src={data.images[0].url} />
      <div className="playlist__name">{data.name}</div>
    </div>
  );
};
export default PlaylistBox;
