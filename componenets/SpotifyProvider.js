import React, { useContext, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
const BUILD_SERVER = "https://spotifyvis.herokuapp.com/";
const LOCAL_SERVER = "http://localhost:3001/";
const spotifyApi = new SpotifyWebApi({
  clientId: "49681fb2bb5b43d1aed58f27f340a01b",
});

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function SpotifyProvider({ children }) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const [user, setUser] = useState([]);
  const [userFollowed, setUserFollowed] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [userTopArtists, setUserTopArtists] = useState([]);
  const [userTop50Artists, setUserTop50Artists] = useState([]);
  const [userTopTracks, setUserTopTracks] = useState([]);
  const login = (code) => {
    axios
      .post(BUILD_SERVER + "login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);

        window.history.pushState({}, null, "/dashboard");
      })
      .catch((err) => {
        console.log(err);
        //window.location = "/";
      });
  };
  const refresh = () => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(BUILD_SERVER + "refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          //window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  };
  useEffect(() => {
    //to avoid no token error on inital render
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.setRefreshToken(refreshToken);
    spotifyApi.getMe().then((res) => {
      setUser(res.body);
    });
    spotifyApi.getMyTopArtists({ limit: 10 }).then((res) => {
      setUserTopArtists(res.body.items);
    });
    spotifyApi.getMyTopArtists({ limit: 50 }).then((res) => {
      setUserTop50Artists(res.body.items);
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
    <StateContext.Provider
      value={{
        login,
        refresh,
        user,
        userFollowed,
        userPlaylists,
        userTopArtists,
        userTopTracks,
        userTop50Artists,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
