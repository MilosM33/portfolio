import "./Navbar.css";
import { Link } from "react-router-dom";
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

  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li>
            <Link to={"/about"}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
