const ContentBox = ({ data }) => {
  let trackLength = data.duration_ms / 60000 || "";
  const convertTrackLength = () => {
    if (typeof trackLength === "number") {
      trackLength = trackLength.toFixed(2);
      trackLength = trackLength.toString();
      trackLength = trackLength.replace(".", ":");
      return trackLength;
    }
    return "";
  };
  trackLength = convertTrackLength();
  return (
    <div className="contentbox">
      <img
        src={data.album ? data.album.images[2].url : data.images[2].url}
        alt=""
        className="contentbox__image"
      />
      <p className="contentbox__name">{data.name}</p>
      <p className="contentbox__time">{trackLength ? trackLength : ""}</p>
    </div>
  );
};

export default ContentBox;
