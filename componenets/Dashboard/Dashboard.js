import { useState, useEffect } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ContentBox from "../ContentBox/ContentBox";
const spotifyApi = new SpotifyWebApi({
  clientId: "49681fb2bb5b43d1aed58f27f340a01b",
});
const Dashboard = ({ code }) => {
  const [user, setUser] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const accessToken = useAuth(code);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMe().then((res) => {
      setUser(res.body);
    });
    spotifyApi.getMyTopArtists().then((res) => {
      setUserTopArtists(res.body.items);
      console.log(res.body.items);
    });
  }, [accessToken]);

  return (
    <section className="dashboard">
      <h2>Welcome to your Dashboard {user.display_name}</h2>
      <div className="dashboard__content">
        <div className="dashboard__content-topArtist">
          <h4>Your Top Artist</h4>
          {userTopArtists.map((artist) => {
            return <ContentBox data={artist} />;
          })}
        </div>
        <div className="dashboard__content-topArtist">
          <h4>Your Top Artist</h4>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
