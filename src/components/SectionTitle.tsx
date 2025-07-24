import { motion as m } from "framer-motion";

const SectionTitle = ({
  title,
  title2,
  subTitle,
  headerClassName,
  subTitleClassName,
  containerClassName,
  titleClassName,
}: {
  title: string;
  title2?: string;
  subTitle: string;
  containerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}) => {
  return (
    <div
      className={`flex w-full flex-col gap-8 items-center justify-center text-center ${containerClassName}`}
    >
      <div className={`flex flex-col gap-2 ${headerClassName}`}>
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`section-title max-w-md ${titleClassName}`}
        >
          {title}
        </m.h2>
        {title2 && (
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            className={`section-title max-w-md ${titleClassName}`}
          >
            {title2}
          </m.h2>
        )}
      </div>
      <m.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
        className={`section-subTitle max-w-md ${subTitleClassName}`}
      >
        {subTitle}
      </m.p>
    </div>
  );
};

export default SectionTitle;
