import { useEffect, useState } from "react";
import { routePages, socials } from "../utils/constants";
import CusBtn from "./CusBtn";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 100);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setIsScrolled(window.scrollY > 100);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-screen py-4 px-2 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className='flex justify-between items-center md:px-6 lg:px-12 bg-transparent w-full'>
        <Logo inner='black' outer='white' />
        <div className='hidden md:flex'>
          <div className='flex items-center gap-8'>
            {routePages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-white"
                    : "font-medium text-gray-400"
                }
              >
                {page.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className=' items-center gap-4 hidden md:flex'>
          <CusBtn title='Signup' variant='black' />
          <CusBtn title='Login' variant='white' />
        </div>
        <CusBtn
          variant='white'
          Icon={CiMenuFries}
          className='!bg-transparent text-white text-3xl !px-0 md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div
        className={`${
          isMenuOpen ? "w-screen" : "w-0"
        } absolute top-0 left-0 right-0 bottom-0 h-screen overscroll-none overflow-hidden transition-all duration-300 bg-black/90 backdrop-blur-3xl z-50`}
      >
        <div className='flex justify-end items-center pt-4 px-2'>
          <CusBtn
            variant='white'
            Icon={RiCloseLargeLine}
            className='!bg-transparent text-white text-3xl !px-0 md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        <div className='flex flex-col items-start justify-center px-4 gap-8 mt-12'>
          {routePages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-white text-4xl"
                  : "font-medium text-gray-400 text-4xl"
              }
            >
              {page.title}
            </NavLink>
          ))}
        </div>
        <div className='flex items-start justify-center px-4 gap-8 mt-12'>
          {socials.map((social) => (
            <Link
              to={social.path}
              key={social.path}
              target='_blank'
              rel='noopener noreferrer'
            >
              <social.icon className='text-white text-3xl' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
