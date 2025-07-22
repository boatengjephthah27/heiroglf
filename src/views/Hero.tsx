import CusBtn from "../components/CusBtn";
import { clients } from "../utils/constants";

const Hero = () => {
  return (
    <div
      className='hero-bg bg-black text-white px-3 pt-40 pb-16 mt-0 md:px-6 lg:px-12 flex flex-col gap-8 text-center items-center justify-center'
      //   style={{ backgroundImage: "url('/footer.png')" }}
    >
      <h1 className='hero-title max-w-2xl leading-[1.35]'>
        Redefining Crypto Finance for Africa
      </h1>
      <p className='hero-description max-w-2xl text-gray-400'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        dolor nisi distinctio, possimus exercitationem mollitia iure praesentium
        ea eligendi ex sapiente saepe. Vitae.
      </p>
      <div className='flex flex-col md:flex-row items-center justify-center md:gap-3 gap-8 mt-6'>
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
      </div>
      <div className='flex items-center justify-between gap-4 mt-12 w-full px-12'>
        {clients.map((client) => (
          <client.icon className='text-7xl text-gray-500' />
        ))}
      </div>
    </div>
  );
};

export default Hero;
