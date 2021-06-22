import { useStateContext } from "../componenets/SpotifyProvider";
import SideBar from "../componenets/SideBar/SideBar";
import PlaylistBox from "../componenets/PlaylistBox";
const Playlist = () => {
  const globalState = useStateContext();
  console.log(globalState.userPlaylists.items);
  return (
    <section>
      <SideBar />
      <div className="toptracks">
        <div className="toptracks__header"> Your Playlists</div>
        <div className="playlist__display">
          {globalState.userPlaylists.items.map((playlist, i) => {
            return <PlaylistBox key={i} data={playlist} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Playlist;
