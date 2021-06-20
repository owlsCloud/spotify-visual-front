import { useRouter } from "next/router";
const SideBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="navbar">
      <div className="logo hideMobile">
        <i className="fab fa-spotify fa-3x" style={{ color: "#17A24A" }} />
      </div>
      <ul>
        <li
          className={`navBox ${
            pathname === "/dashboard" ? "navBox--active" : ""
          }`}
        >
          <a href="/dashboard" className="navBox__link">
            <i className="fas fa-user fa-2x" />
            <p>Profile</p>
          </a>
        </li>

        <li
          className={`navBox ${
            pathname === "/artists" ? "navBox--active" : ""
          }`}
        >
          <a href="/artists" className="navBox__link">
            <i className="fas fa-guitar fa-2x" />
            <p>Top Artist</p>
          </a>
        </li>
        <li
          className={`navBox ${
            pathname === "/toptracks" ? "navBox--active" : ""
          }`}
        >
          <a href="/toptracks" className="navBox__link">
            <i className="fas fa-music fa-2x" />
            <p>Top Tracks</p>
          </a>
        </li>
        <li
          className={`navBox ${pathname === "/recent" ? "navBox--active" : ""}`}
        >
          <a href="/recent" className="navBox__link">
            <i className="fas fa-play fa-2x" />
            <p>Recent</p>
          </a>
        </li>
        <li
          className={`navBox ${
            pathname === "/playlists" ? "navBox--active" : ""
          }`}
        >
          <a href="/playlists" className="navBox__link">
            <i className="fas fa-headphones fa-2x" />
            <p>Playlists</p>
          </a>
        </li>
      </ul>
      <div className=" logo hideMobile">
        <a href="https://github.com/owlsCloud/spotify-visual-front">
          <i className="fab fa-github fa-3x " />
        </a>
      </div>
    </nav>
  );
};

export default SideBar;
