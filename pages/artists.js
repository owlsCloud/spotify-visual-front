import { useStateContext } from "../componenets/SpotifyProvider";
import ArtistBox from "../componenets/ArtistBox/ArtistBox";
import SideBar from "../componenets/SideBar/SideBar";
const TopArtists = () => {
  const globalState = useStateContext();
  return (
    <section>
      <SideBar />
      <div className="artists">
        <div className="artists__header"> Top Artists</div>
        <div className="artists__display">
          {globalState.userTop50Artists.map((artist, i) => {
            return <ArtistBox key={i} artist={artist} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default TopArtists;
