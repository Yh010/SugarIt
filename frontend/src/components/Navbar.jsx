import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

function NavList() {
  return (
    <ul className="flex flex-row gap-4 lg:gap-6">
      <li className="font-medium">
        <a href="#" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Menu
        </a>
      </li>
      <li className="font-medium">
        <a href="#" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Account
        </a>
      </li>
      <li className="font-medium">
        <a href="#" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Blocks
        </a>
      </li>
      <li className="font-medium">
        <a href="#" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Docs
        </a>
      </li>
    </ul>
  );
}

export function NavbarTop() {

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
    <div className="flex justify-between items-center w-full">
      <Typography
        as="a"
        href="#"
        variant="h5"
        className="text-blue-gray-900 cursor-pointer"
      >
        SugarIt
      </Typography>
      <div className="lg:flex justify-end">
        <NavList />
      </div>
    </div>
  </Navbar>
  );
}

export default NavbarTop;
