import { useStateContext } from "../componenets/SpotifyProvider";
import SideBar from "../componenets/SideBar/SideBar";
import PlaylistBox from "../componenets/PlaylistBox";
const Playlists = () => {
  const globalState = useStateContext();
  console.log(globalState.userPlaylists.items);
  return (
    <section>
      <SideBar />
      <div className="toptracks">
        <div className="toptracks__header"> Your Playlists</div>
        <div className="playlist__display">
          {globalState.userPlaylists.items.map((playlist, i) => {
            return (
              <div className="playlist">
                <img src={data.images[0].url} />
                <div className="playlist__name">{data.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Playlists;
