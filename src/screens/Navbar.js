import React from "react";
import { Link } from "react-router-dom";
import Map from "../Map.png";
import { GlobeIcon, PlusCircleIcon, HomeIcon } from "@heroicons/react/outline";
import "./styles.modules.css";

export default function Navbar() {
  return (
    <nav className="h-20 bg-green-800 text-white font-bold sticky top-0">
      <ul className="flex items-center justify-between h-full px-10">
        <div className="flex flex-row items-center p-2">
          <Link to="/">
            <img
              src={Map}
              className="animate-bounce w-16 bg-green-800 rounded-full border border-green-800 shadow hover:bg-green-700"
            />
          </Link>
          <p className="p-3 font-black">Enhance the World</p>
        </div>
        <div className="flex justify-between w-9/12">
          <Link to="/">
            <li className="hover:shadow hover:bg-green-700 p-2 rounded-lg flex">
              <HomeIcon width={30} className="p-1" />
              Home Page
            </li>
          </Link>
          <Link to="/formpage">
            <li className="hover:shadow hover:bg-green-700 p-2 rounded-lg flex">
              <PlusCircleIcon width={30} className="p-1" />
              Add Report
            </li>
          </Link>
          <Link to="/blogppage">
            <li className="hover:shadow hover:bg-green-700 p-2 rounded-lg flex">
              <GlobeIcon width={30} className="p-1" />
              Blog Page
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}
