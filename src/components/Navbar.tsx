"use client";
// import { usePrivy } from "@privy-io/react-auth";
import { useState } from "react";

import Link from "next/link";

import FinalChapterLogo from "../components/graphics/finalchapterlogo";

export default function Navbar() {
  // const { authenticated, login, logout, ready } = usePrivy();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-finalChapterBlack p-2">
      <div className="px-16 mx-auto flex justify-between items-center">
        <div className="">
          <Link href="/" prefetch={false}>
            <FinalChapterLogo />
          </Link>
        </div>

        <div className="items-center">
          <svg
            width="39"
            height="40"
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="Ellipse 1" cx="19.5" cy="20" r="19.5" fill="#E2E8F0" />
          </svg>

          {/* {authenticated && ready ? (
            <button
              className="bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded-lg"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-violet-600 hover:bg-violet-700 py-2 px-4 text-white rounded-lg"
              onClick={login}
            >
              Login
            </button>
          )} */}
        </div>
        {/* <div className="md:hidden flex items-center">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
      {/* {isOpen && ( */}
      {/* <div className="md:hidden flex flex-col items-center mt-2"> */}
      {/* <button className="bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded-lg">
            Logout
          </button> */}
      {/* {authenticated && ready ? (
            <button
              className="bg-red-600 hover:bg-red-700 py-2 px-4 text-white rounded-lg"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <button
              className="bg-violet-600 hover:bg-violet-700 py-2 px-4 text-white rounded-lg"
              onClick={login}
            >
              Login
            </button>
          )} */}
      {/* </div> */}
      {/* )} */}
    </nav>
  );
}
