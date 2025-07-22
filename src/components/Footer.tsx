import { Link, NavLink } from "react-router-dom";
import { routePages, socials } from "../utils/constants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className='py-12 footer-bg px-3 md:px-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-between gap-12'>
        <div className='flex flex-col items-center md:items-start justify-center'>
          <div className='flex items-center gap-3'>
            <Logo inner='black' outer='white' />
            <h3 className='text-white text-2xl font-bold'>HEIROGLF</h3>
          </div>
          <p className='text-white text-center md:text-left mt-7 max-w-44 text-lg leading-6 tracking-wide font-medium'>
            Remaking Cypto Finance for Africa
          </p>
          <div className='flex items-center gap-4 text-white mt-8'>
            {socials.map((social) => (
              <Link
                key={social.path}
                to={social.path}
                target='_blank'
                rel='noopener noreferrer'
              >
                <social.icon className='text-2xl' />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-row gap-12 items-center justify-center'>
          <div className='flex flex-col items-start justify-start gap-8'>
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
          <div className='flex flex-col items-start justify-start gap-8'>
            {routePages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-white text-left"
                    : "font-medium text-gray-400 text-left"
                }
              >
                {page.title}
              </NavLink>
            ))}
          </div>
          <div className='flex flex-col items-start justify-start gap-8'>
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
        <div className='grid grid-cols-1 lg:col-span-1 text-center md:text-left md:grid-cols-3 md:col-span-2 lg:grid-cols-1 md:items-start w-full md:flex-row items-center justify-center gap-8 text-gray-400'>
          <p className='lg:w-80'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className='lg:w-80'>
            Quaerat velit molestiae dolor odio mollitia ab nesciunt consectetur.
          </p>
          <p className='lg:w-80'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className='border-t border-white/20 mt-12 pt-12 gap-8 text-gray-300 flex flex-col md:flex-row  text-center items-center justify-between'>
        <div>
          <p>© 2025 Heiroglf. All rights reserved.</p>
        </div>
        <div className='flex flex-row gap-4'>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
