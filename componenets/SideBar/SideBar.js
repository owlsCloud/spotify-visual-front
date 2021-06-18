import { useRouter } from "next/router";

const SideBar = () => {
  return (
    <nav className="navbar">
      <div></div>
      <ul>
        <li>
          <a href="/">
            <i className="fas fa-user fa-2x" />
            <p>Profile</p>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fas fa-guitar fa-2x" />
            <p>Top Artist</p>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-music fa-2x" />
            <p>Top Tracks</p>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-play fa-2x" />
            <p>Recent</p>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-headphones fa-2x" />
            <p>Playlists</p>
          </a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default SideBar;
