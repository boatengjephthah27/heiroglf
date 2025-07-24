import { motion as m } from "framer-motion";

const PageUnderConstructoin = ({ title }: { title: string }) => {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='text-center'>
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='text-4xl font-bold mb-4'
        >
          {title}
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className='text-gray-400'
        >
          This page is under construction.
        </m.p>
      </div>
    </div>
  );
};

export default PageUnderConstructoin;
