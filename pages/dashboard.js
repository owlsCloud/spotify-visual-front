import { useStateContext } from "../componenets/SpotifyProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ContentBox from "../componenets/ContentBox/ContentBox";
import SideBar from "../componenets/SideBar/SideBar";
import DashHeader from "../componenets/DashHeader";
const Dashboard = () => {
  const globalState = useStateContext();
  const { query } = useRouter();

  useEffect(() => {
    globalState.login(query.code);
  }, [query.code]);
  return (
    <section className="dashboard">
      <SideBar />
      <div className="dashboard__header">
        <DashHeader />
        <div className="dashboard__user-stats">
          <div className="dashboard__user-statbox">
            <p style={{ color: "#1ece5c" }}>
              {globalState.user.followers
                ? globalState.user.followers.total
                : 0}
            </p>
            <p style={{ color: "#8f8f8f" }}>Followers</p>
          </div>
          <div className="dashboard__user-statbox">
            <p style={{ color: "#1ece5c" }}>
              {globalState.userFollowed.total
                ? globalState.userFollowed.total
                : 0}
            </p>
            <p style={{ color: "#8f8f8f" }}>Following</p>
          </div>
          <div className="dashboard__user-statbox">
            <p style={{ color: "#1ece5c" }}>
              {globalState.userPlaylists.total
                ? globalState.userPlaylists.total
                : 0}{" "}
            </p>
            <p style={{ color: "#8f8f8f" }}>Playlists</p>
          </div>
        </div>
      </div>
      <div className="dashboard__content">
        <div className="dashboard__content-left">
          <h4>Your Top 10 Artist</h4>
          <div className="dashboard__content-topArtists">
            {globalState.userTopArtists.map((artist, i) => {
              return <ContentBox key={i} data={artist} />;
            })}
          </div>
        </div>
        <div className="dashboard__content-right">
          <h4>Your Top 10 Tracks</h4>
          <div className="dashboard__content-topTracks">
            {globalState.userTopTracks.map((track, i) => {
              return <ContentBox key={i} data={track} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
