const ContentBox = ({ data, page }) => {
  let trackLength = data.duration_ms || "";
  const convertTrackLength = () => {
    if (typeof trackLength === "number") {
      let minutes = Math.floor(trackLength / 60000);
      let seconds = ((trackLength % 60000) / 1000).toFixed(0);
      return seconds == 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    return "";
  };
  trackLength = convertTrackLength();
  return page === "toptracks" ? (
    <div className="contentbox">
      <img
        src={data.album ? data.album.images[2].url : data.images[2].url}
        alt=""
        className="contentbox__image"
      />
      <div>
        <p className="contentbox__name">{data.name}</p>
        <p className="contentbox__trackdetails">{`${data.artists[0].name} \u00A0  ${data.album.name}`}</p>
      </div>
      <p className="contentbox__time">{trackLength ? trackLength : ""}</p>
    </div>
  ) : (
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
