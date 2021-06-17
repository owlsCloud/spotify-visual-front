import { useState, useEffect } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ContentBox from "../ContentBox/ContentBox";
import { placeholder } from "../../public/placeholder.png";
const spotifyApi = new SpotifyWebApi({
  clientId: "49681fb2bb5b43d1aed58f27f340a01b",
});
const Dashboard = ({ code }) => {
  const [user, setUser] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const accessToken = useAuth(code);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMe().then((res) => {
      setUser(res.body);
      console.log(res.body);
    });
    spotifyApi.getMyTopArtists().then((res) => {
      setUserTopArtists(res.body.items);
      console.log(res.body.items);
    });
    spotifyApi.getMyTopTracks().then((res) => {
      setUserTopTracks(res.body.items);
      console.log(res.body.items);
    });
  }, [accessToken]);

  return (
    <section className="dashboard">
      <img
        className="profileImg"
        src={user.images ? user.images[0].url : ""}
        alt=""
      />
      <h2>Welcome to your Dashboard {user.display_name}</h2>
      <div className="dashboard__content">
        <div className="dashboard__content-topArtists">
          <h4>Your Top Artist</h4>
          {userTopArtists.map((artist, i) => {
            return <ContentBox key={i} data={artist} />;
          })}
        </div>
        <div className="dashboard__content-topTracks">
          <h4>Your Top Tracks</h4>
          {userTopTracks.map((artist, i) => {
            return <ContentBox key={i} data={artist} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
