import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import { whatYouCanDo } from "../utils/constants";

const WhatYouCanDo = () => {
  return (
    <div className='w-full px-3 md:px-12 py-20 bg-indigo-200'>
      <SectionTitle
        title='What you can do'
        title2='with Heiroglf'
        subTitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolor nisi distinctio, possimus exercitationem mollitia iure praesentium ea eligendi.'
        headerClassName='lg:text-left !text-black'
        containerClassName=' w-full lg:flex-row gap-8 md:!justify-between'
        subTitleClassName='!text-black lg:text-left'
        titleClassName='!text-black'
      />
      <div className='mt-12 flex flex-col gap-12'>
        {whatYouCanDo?.map((item, index) => (
          <div
            key={`${item?.title}-${index}`}
            className='flex flex-col md:flex-row items-center justify-between gap-12'
          >
            <Card index={index + 1} className='bg-slate-900'>
              <div className='flex items-center justify-center gap-4 flex-col'>
                <item.icon className='text-7xl text-gray-200' />
                <h3 className='text-gray-200 capitalize text-3xl'>
                  {item.title}
                </h3>
              </div>
            </Card>
            <Card className='bg-slate-600'>
              <div>
                <p className='text-gray-300 tracking-wide leading-7'>
                  {item.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouCanDo;
