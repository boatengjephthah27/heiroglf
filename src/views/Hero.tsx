import CusBtn from "../components/CusBtn";
import { clients } from "../utils/constants";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <div
      className='hero-bg bg-black text-white px-3 pt-40 pb-16 mt-0 md:px-6 lg:px-12 flex flex-col gap-8 text-center items-center justify-center'
      //   style={{ backgroundImage: "url('/footer.png')" }}
    >
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='hero-title max-w-2xl leading-[1.35]'
      >
        Redefining Crypto Finance for Africa
      </m.h1>
      <m.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className='hero-description max-w-2xl text-gray-400'
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        dolor nisi distinctio, possimus exercitationem mollitia iure praesentium
        ea eligendi ex sapiente saepe. Vitae.
      </m.p>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className='flex flex-col md:flex-row items-center justify-center md:gap-3 gap-8 mt-6'
      >
        <CusBtn
          title='Accomplish anything with crypto'
          onClick={() => {}}
          variant='white'
        />
        <CusBtn
          title='Get Started'
          onClick={() => {}}
          className='border border-gray-700'
        />
      </m.div>
      <div className='flex items-center justify-between gap-4 mt-12 w-full px-12'>
        {clients.map((client, index) => (
          <m.div
            key={client.icon.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.6 + index * 0.2,
            }}
          >
            <client.icon className='md:text-7xl text-5xl text-gray-500' />
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
