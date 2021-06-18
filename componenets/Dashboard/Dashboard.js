import { useState, useEffect } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ContentBox from "../ContentBox/ContentBox";
import { placeholder } from "../../public/placeholder.png";
import SideBar from "../SideBar/SideBar";
const spotifyApi = new SpotifyWebApi({
  clientId: "49681fb2bb5b43d1aed58f27f340a01b",
});
const Dashboard = ({ code }) => {
  const [user, setUser] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userCurrentlyPlayed, setUserCurrentlyPlayed] = useState([]);
  const [userFollowed, setUserFollowed] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const accessToken = useAuth(code);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMe().then((res) => {
      setUser(res.body);
      console.log(res.body);
    });
    spotifyApi.getMyTopArtists({ limit: 10 }).then((res) => {
      setUserTopArtists(res.body.items);
    });
    spotifyApi.getMyTopTracks({ limit: 10 }).then((res) => {
      setUserTopTracks(res.body.items);
    });
    spotifyApi.getFollowedArtists().then((res) => {
      setUserFollowed(res.body.artists);
      console.log(res.body);
    });
    spotifyApi.getUserPlaylists(user.display_name).then((res) => {
      setUserPlaylists(res.body);
      console.log(res.body);
    });
  }, [accessToken]);

  return (
    <section className="dashboard">
      <SideBar />
      <img
        className="profileImg"
        src={user.images ? user.images[0].url : ""}
        alt=""
      />
      <h2>{user.display_name}</h2>
      <div className="dashboard__user-stats">
        <div className="dashboard__user-statbox">
          <p style={{ color: "#1ece5c" }}>
            {user.followers ? user.followers.total : 0}
          </p>
          <p style={{ color: "#8f8f8f" }}>Followers</p>
        </div>
        <div className="dashboard__user-statbox">
          <p style={{ color: "#1ece5c" }}>{userFollowed.total} </p>
          <p style={{ color: "#8f8f8f" }}>Following</p>
        </div>
        <div className="dashboard__user-statbox">
          <p style={{ color: "#1ece5c" }}> {userPlaylists.total} </p>
          <p style={{ color: "#8f8f8f" }}>Playlists</p>
        </div>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__content-left">
          <h4>Your Top 10 Artist</h4>
          <div className="dashboard__content-topArtists">
            {userTopArtists.map((artist, i) => {
              return <ContentBox key={i} data={artist} />;
            })}
          </div>
        </div>
        <div className="dashboard__content-right">
          <h4>Your Top 10 Tracks</h4>
          <div className="dashboard__content-topTracks">
            {userTopTracks.map((track, i) => {
              return <ContentBox key={i} data={track} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
