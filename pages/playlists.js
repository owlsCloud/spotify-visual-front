import { useStateContext } from "../componenets/SpotifyProvider";
import SideBar from "../componenets/SideBar/SideBar";
import Image from "next/image";
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
          {globalState.userPlaylists.items
            ? globalState.userPlaylists.items.map((playlist, i) => {
                return (
                  <PlaylistBox key={i} data={playlist} />
                  // <div className="playlist" key={i}>
                  //   <Image
                  //     src={playlist.images[0].url}
                  //     width="150px"
                  //     height="150px"
                  //     alt=""
                  //   />
                  //   <div className="playlist__name">{playlist.name}</div>
                  // </div>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
};
export default Playlists;
