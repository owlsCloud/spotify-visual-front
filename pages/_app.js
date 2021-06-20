import { SpotifyProvider } from "../componenets/SpotifyProvider";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SpotifyProvider>
      <Component {...pageProps} />
    </SpotifyProvider>
  );
}

export default MyApp;
