import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="flex flex-row gap-4 lg:gap-6">
      <li className="font-medium">
        <Link to="/menu" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Menu
        </Link>
      </li>
      <li className="font-medium">
        <Link to="/account" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Account
        </Link>
      </li>
      <li className="font-medium">
        <Link to="/books" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Books
        </Link>
      </li>
      <li className="font-medium">
        <Link to="/AboutUs" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          About Us
        </Link>
      </li>
      <li className="font-medium">
        <Link to="/forum" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Forum
        </Link>
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
