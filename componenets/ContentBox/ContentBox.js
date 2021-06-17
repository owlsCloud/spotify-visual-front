const ContentBox = ({ data }) => {
  return (
    <div className="contentbox">
      <img
        src={data.album ? data.album.images[2].url : data.images[2].url}
        alt=""
        className="contentbox__image"
      />
      <p className="contentbox__name">{data.name}</p>
    </div>
  );
};

export default ContentBox;
