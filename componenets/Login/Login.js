const Login = () => {
  const BUILD_REDIRECT = "https://spotifyvis.netlify.app";
  const LOCAL_REDIRECT = "http://localhost:3000";
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=49681fb2bb5b43d1aed58f27f340a01b&response_type=code&redirect_uri=${BUILD_REDIRECT}&scope=user-read-recently-played%20user-top-read%20user-read-currently-playing%20user-follow-read%20user-read-email%20user-library-read`;
  return (
    <div className="login">
      <a href={AUTH_URL} className="login__button">
        Sign in to Spotify
      </a>
    </div>
  );
};

export default Login;
