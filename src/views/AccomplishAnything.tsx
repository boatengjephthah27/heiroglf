import LogoInCircles from "../components/LogoInCircles";
import SectionTitle from "../components/SectionTitle";

const AccomplishAnything = () => {
  return (
    <div className='w-full md:px-12 h-full'>
      <div className='hero-bg-flipped absolute left-0 z-0 h-full w-screen' />
      <div className='px-2 pt-20 pb-32'>
        <SectionTitle
          title='Accomplish '
          title2='anything in crypto'
          subTitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolor nisi distinctio, possimus exercitationem mollitia iure'
        />
        <div className='mt-12 grid lg:grid-cols-3 items-center gap-12'>
          <div>
            {[1, 2, 3]?.map((item) => (
              <div
                key={item}
                className='flex items-center flex-col lg:flex-row justify-center gap-3 mb-4'
              >
                <div className='w-2 h-2 rounded-full bg-white lg:block' />
                <h3 className='text-gray-400 text-center lg:text-left'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor
                  sit amet consectetur.
                </h3>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <LogoInCircles />
          </div>
          <div>
            {[1, 2, 3]?.map((item) => (
              <div
                key={item}
                className='flex items-center flex-col lg:flex-row justify-center gap-3 mb-4'
              >
                <div className='w-2 h-2 rounded-full bg-white lg:block' />
                <h3 className='text-gray-400 text-center lg:text-left'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor
                  sit amet consectetur.
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomplishAnything;
