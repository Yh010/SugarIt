import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="flex flex-row gap-4 lg:gap-6" >
      <li className="font-medium">
        <Link to="/menu" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Menu
        </Link>
      </li>
      <li className="font-medium">
        <Link to="/events" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Events
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
      <li className="font-medium">
        <Link to="/checkout" className="hover:text-blue-500 transition-colors text-blue-gray-900">
          Cart
        </Link>
      </li>
    </ul>
  );
}

export function NavbarTop() {

  return (
    <Navbar className="w-full mx-auto max-w-none px-4 py-3 navbar-top" >
    <div className="flex justify-between items-center w-full" >
      <Typography
        as="a"
        href="#"
        variant="h5"
        className="text-blue-gray-900 cursor-pointer" 
      >
       <Link to="/">
          SugarIt
        </Link>
      </Typography>
      <div className="lg:flex justify-end">
        <NavList />
      </div>
    </div>
  </Navbar>
  );
}

export default NavbarTop;
