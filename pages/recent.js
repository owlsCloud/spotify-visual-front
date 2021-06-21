import { useStateContext } from "../componenets/SpotifyProvider";
import ContentBox from "../componenets/ContentBox/ContentBox";
import SideBar from "../componenets/SideBar/SideBar";
const TopTracks = () => {
  const globalState = useStateContext();
  return (
    <section>
      <SideBar />
      <div className="toptracks">
        <div className="toptracks__header"> Top Artists</div>
        <div className="toptracks__display">
          {globalState.userRecentlyPlayedTracks.map((track, i) => {
            return <ContentBox key={i} data={track.track} page={"toptracks"} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default TopTracks;
