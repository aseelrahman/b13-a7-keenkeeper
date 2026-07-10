'use client'
import Image from "next/image";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()

  const home = (
    <Link href="/" className={`flex items-center gap-1 py-3 px-4 text-[16px] rounded-full hover:scale-105 transition-transform duration-200 ${pathName === '/' ? 'active text-white' : 'text-[#64748B]'}`}>
      <RiHome2Line /> Home
    </Link>
  );
  const timeLine = (
    <Link href="/timeline" className={`flex items-center gap-1 py-3 px-4 text-[16px] rounded-full hover:scale-105 transition-transform duration-200 ${pathName === '/timeline' ? 'active text-white' : 'text-[#64748B]'}`}>
      <CiClock2 /> Timeline
    </Link>
  );
  const stats = (
    <Link href="/stats" className={`flex items-center gap-1 py-3 px-4 text-[16px] rounded-full hover:scale-105 transition-transform duration-200 ${pathName === '/stats' ? 'active text-white' : 'text-[#64748B]'}`}>
      <GoGraph /> Stats
    </Link>
  );

  return (
    <div className=" shadow-sm">
      <div className="navbar container mx-auto flex items-center justify-between">
        <div className=" flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden py-3 px-4 text-[16px] rounded-full hover:scale-105 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {home}
              {timeLine}
              {stats}
            </ul>
          </div>
          <Image src={Logo} alt="Keen Keeper Logo" />
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {home}
            {timeLine}
            {stats}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
