import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const container = {
    width: "90%",
    margin: "0 auto",
    padding: "1rem",
  };
  return (
    <header style={container}>
      <nav
        className="relative flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div
            className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
            id="navbarSupportedContentY"
          >
            <ul className="me-auto flex flex-col lg:flex-row">
              <li className="mb-4 lg:mb-0 lg:pe-2">
                <NavLink
                  to="/"
                  className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
