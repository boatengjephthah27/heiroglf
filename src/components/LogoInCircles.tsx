import Logo from "./Logo";

const LogoInCircles = () => {
  return (
    <div className='w-96 h-96 rounded-full border border-gray-700 flex items-center justify-center  scale-90 md:scale-100'>
      <div className='w-72 h-72 rounded-full border border-gray-700 flex items-center justify-center relative'>
        <div className='absolute top-0 left-1 flex items-center justify-center h-3 bg-gray-600 w-3 animate-spin-slow' />
        <div className='w-56 h-56 rounded-full border border-gray-700 flex items-center justify-center relative'>
          <div className='w-40 h-40 rounded-full bg-white flex items-center justify-center relative animate-spin-left'>
            <div className='absolute -top-1 -left-1 flex items-center justify-center h-3 bg-gray-600 w-3' />
            <Logo
              inner='white'
              outer='black'
              className='scale-200 animate-spin'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoInCircles;
