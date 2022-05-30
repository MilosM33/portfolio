import "./Navbar.css";
import { Link } from "react-router-dom";
import {FaHamburger} from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  function renderLinks() {
    return routes.map((route, i) => (
      <li>
      <Link key={i} to={route.path}>
        {route.name}
      </Link>
      </li>
    ));
  }

  function openNav() {
    setIsOpen(true);
  }
  function closeNav()
  {
    setIsOpen(false);
  }
  return (
    <nav className={`${+ isOpen ? "active" : "" }`}>
      <div className="hamburger">
        {!isOpen ? <FaHamburger onClick={openNav} /> : <IoClose onClick={closeNav} className="btn-close"/>}
      </div>
      <ul className={`navbar ${+ isOpen ? "active" : "" }`}>
        {renderLinks()}
      </ul>
    </nav>
  );
}
