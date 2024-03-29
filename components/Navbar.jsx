 "use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
 

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">

        <p className="logo_text">Boostallsocials</p>
      </Link>

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">


          <Link href="/crop-disease" className="black_btn">
            Browse
          </Link>
          <button type="button" onClick={null} className="outline_btn">
          Sign In
          </button>


        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/profile.png"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                AI Planner
              </Link>
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                }}
                className="mt-5 w-full black_btn"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
