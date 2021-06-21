import { useStateContext } from "../componenets/SpotifyProvider";
import SideBar from "../componenets/SideBar/SideBar";
import ArtistBox from "../componenets/ArtistBox/ArtistBox";
const TopTracks = () => {
  const globalState = useStateContext();
  return (
    <section>
      <SideBar />
      <div className="toptracks">
        <div className="toptracks__header"> Your Playlists</div>
        <div className="playlist__display">
          {globalState.userPlaylists.items.map((playlist, i) => {
            return (
              <div key={i} className="playlist">
                <img src={playlist.images[0].url} />
                <div className="playlist__name">{playlist.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TopTracks;
