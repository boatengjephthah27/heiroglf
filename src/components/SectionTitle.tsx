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
        <h2 className={`section-title max-w-md ${titleClassName}`}>{title}</h2>
        {title2 && (
          <h2 className={`section-title max-w-md ${titleClassName}`}>
            {title2}
          </h2>
        )}
      </div>
      <p className={`section-subTitle max-w-md ${subTitleClassName}`}>
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
