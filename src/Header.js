import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function Header(props) {
    return (
      <div>
        <ul className="flex">
          <li className="mr-6">
            <Link className="text-blue-500 hover:text-blue-800" to="/">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <NavLink
              activeClassName="bg-black text-5xl"
              className="text-blue-500 hover:text-blue-800"
              to="/1"
            >
              Link1
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              activeClassName="bg-black"
              className="text-blue-500 hover:text-blue-800"
              to="/2"
            >
              Link2
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              className="text-blue-500 hover:text-blue-800"
              activeClassName="bg-black"
              to="/3"
            >
              link3
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              className="text-blue-500 hover:text-blue-800"
              activeClassName="bg-black"
              to="/5"
            >
              querry
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink
              className="text-blue-500 hover:text-blue-800"
              activeClassName="bg-black"
              to="/url/:one/:two"
            >
              urlparams
            </NavLink>
          </li>
        </ul>
      </div>
    );
}
