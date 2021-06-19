import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../componenets/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import ContentBox from "../componenets/ContentBox/ContentBox";
import Image from "next/image";
import ls from "local-storage";
import placeholder from "../public/placeholder.png";
import SideBar from "../componenets/SideBar/SideBar";
const spotifyApi = new SpotifyWebApi({
  clientId: "49681fb2bb5b43d1aed58f27f340a01b",
});
const Dashboard = () => {
  const { query } = useRouter();
  const [user, setUser] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const [userCurrentlyPlayed, setUserCurrentlyPlayed] = useState([]);
  const [userFollowed, setUserFollowed] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const accessToken = useAuth(query.code);
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
    });
    spotifyApi.getUserPlaylists(user.display_name).then((res) => {
      setUserPlaylists(res.body);
    });
  }, [accessToken]);

  return (
    <section className="dashboard">
      <SideBar />
      <Image
        className="profileImg"
        src={user.images ? user.images[0].url : placeholder}
        width="150px"
        height="150px"
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
          <p style={{ color: "#1ece5c" }}>
            {userFollowed.total ? userFollowed.total : 0}
          </p>
          <p style={{ color: "#8f8f8f" }}>Following</p>
        </div>
        <div className="dashboard__user-statbox">
          <p style={{ color: "#1ece5c" }}>
            {userPlaylists.total ? userPlaylists.total : 0}{" "}
          </p>
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
