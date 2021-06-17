const ContentBox = ({ data }) => {
  return (
    <div>
      <img src={data.images[2]} alt="" />
      <p>{data.name}</p>
    </div>
  );
};

export default ContentBox;
