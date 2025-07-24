import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.div
      // initial={{ y: "95%", opacity: 0 }}
      // animate={{ y: "0%", opacity: 1 }}
      // exit={{ y: "95%", opacity: 0 }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
      className='min-h-screen bg-black text-white flex items-center justify-center'
    >
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Contact</h1>
        <p className='text-gray-400'>This page is under construction.</p>
      </div>
    </m.div>
  );
};

export default Contact;
