import { useStateContext } from "../componenets/SpotifyProvider";
import placeholder from "../public/placeholder.png";
const DashHeader = () => {
  const globalState = useStateContext();
  return (
    <>
      <img
        className="profileImg"
        src={
          globalState.user.images ? globalState.user.images[0].url : placeholder
        }
        alt=""
      />
      <h2>{globalState.user.display_name}</h2>
    </>
  );
};

export default DashHeader;
