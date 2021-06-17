import { useState, useEffect } from "react";
import useAuth from "../useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "49681fb2bb5b43d1aed58f27f340a01b",
});
const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);
  return <div className="dashboard">Welcome to your Dashboard</div>;
};

export default Dashboard;
