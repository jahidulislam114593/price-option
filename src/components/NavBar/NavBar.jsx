import React, { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav>
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose /> : <HiMenuAlt1 />}
      </div>
      {/* <ul className={`md:flex ${open ? "block" : "hidden"}`}></ul> */}
      <ul
        className={`md:flex duration-1000 absolute md:static bg-gray-800 text-white p-4 rounded-lg ${
          open ? "" : "hidden"
        }`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
