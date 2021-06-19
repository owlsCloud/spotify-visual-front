import { useRouter } from "next/router";
import { useState } from "react";
const SideBar = () => {
  const { pathname } = useRouter();
  return (
    <nav className="navbar">
      <div></div>
      <ul>
        <li className={`navBox ${pathname === "/" ? "navBox--active" : ""}`}>
          <a href="/" className="navBox__link">
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
      <div></div>
    </nav>
  );
};

export default SideBar;
