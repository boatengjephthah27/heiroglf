const Logo = ({
  inner,
  outer,
  className,
}: {
  inner: string;
  outer: string;
  className?: string;
}) => {
  return (
    <div className={`relative ${className} w-fit`}>
      <div
        className={`w-12 h-12 bg-${outer} rounded-full flex items-center justify-center`}
      >
        <div className={`w-8 h-8 bg-${inner} rounded-full relative`}>
          <span
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-${outer}`}
          />
          <span
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-${inner}`}
          />
          <span
            className={`absolute bottom-0 left-1/2 -translate-x-1/2  w-1/3 h-1/3 bg-${outer}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
