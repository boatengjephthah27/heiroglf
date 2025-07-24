import { motion as m } from "framer-motion";

const Card = ({
  index,
  children,
  className,
}: {
  index?: number;
  children: React.ReactElement;
  className?: string;
}) => {
  return (
    <m.div
      className={`relative w-full md:w-1/2 h-72 rounded-2xl ${className}`}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: index && index * 0.1,
      }}
    >
      <span className='absolute top-3 left-3 text-gray-400 text-2xl font-bold'>
        {index && `0${index}`}
      </span>
      <div className='w-full h-full rounded-2xl p-4 flex items-center justify-center'>
        <div className='lg:max-w-[50%] w-[70%] md:w-[80%]'>{children}</div>
      </div>
    </m.div>
  );
};

export default Card;
