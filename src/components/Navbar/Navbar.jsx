import "./Navbar.css";
import { Link } from "react-router-dom";
import {FaHamburger} from "react-icons/fa";
export default function Navbar() {
  let routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About me",
    },
    {
      path: "/contact",
      name: "Contact",
    },
    {
      path: "/portfolio",
      name: "Portfolio",
    },
    {
      path: "/blog",
      name: "Blog",
    }
  ];

  function renderLinks() {
    return routes.map((route, i) => (
      <li>
      <Link key={i} to={route.path}>
        {route.name}
      </Link>
      </li>
    ));
  }
  return (
    <nav>
      <FaHamburger className="hamburger"></FaHamburger>
      <ul className="navbar active">
        {renderLinks()}
      </ul>
    </nav>
  );
}
