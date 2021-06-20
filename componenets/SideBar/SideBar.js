import { useRouter } from "next/router";
import Link from "next/link";
const SideBar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="navbar">
      <div className="logo hideMobile">
        <Link href="/dashboard">
          <a>
            <i className="fab fa-spotify fa-3x" style={{ color: "#17A24A" }} />
          </a>
        </Link>
      </div>
      <ul>
        <li
          className={`navBox ${
            pathname === "/dashboard" ? "navBox--active" : ""
          }`}
        >
          <Link href="/dashboard">
            <a className="navBox__link">
              <i className="fas fa-user fa-2x" />
              <p>Profile</p>
            </a>
          </Link>
        </li>

        <li
          className={`navBox ${
            pathname === "/artists" ? "navBox--active" : ""
          }`}
        >
          <Link href="/artists">
            <a className="navBox__link">
              <i className="fas fa-guitar fa-2x" />
              <p>Top Artist</p>
            </a>
          </Link>
        </li>
        <li
          className={`navBox ${
            pathname === "/toptracks" ? "navBox--active" : ""
          }`}
        >
          <Link href="/toptracks">
            <a className="navBox__link">
              <i className="fas fa-music fa-2x" />
              <p>Top Tracks</p>
            </a>
          </Link>
        </li>
        <li
          className={`navBox ${pathname === "/recent" ? "navBox--active" : ""}`}
        >
          <Link href="/recent">
            <a className="navBox__link">
              <i className="fas fa-play fa-2x" />
              <p>Recent</p>
            </a>
          </Link>
        </li>
        <li
          className={`navBox ${
            pathname === "/playlists" ? "navBox--active" : ""
          }`}
        >
          <Link href="/playlists">
            <a className="navBox__link">
              <i className="fas fa-headphones fa-2x" />
              <p>Playlists</p>
            </a>
          </Link>
        </li>
      </ul>
      <div className=" logo hideMobile">
        <a
          href="https://github.com/owlsCloud/spotify-visual-front"
          target="_blank"
        >
          <i className="fab fa-github fa-3x " />
        </a>
      </div>
    </nav>
  );
};

export default SideBar;
