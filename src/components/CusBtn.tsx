import type { IconType } from "react-icons";

const CusBtn = ({
  title,
  onClick,
  className,
  variant = "black",
  Icon,
}: {
  title?: string;
  onClick?: () => void;
  className?: string;
  variant?: "black" | "white";
  Icon?: IconType;
}) => {
  return (
    <button
      className={`bg-${variant} ${
        variant === "black" ? "text-white" : "text-black"
      } px-4 py-2 rounded-md cursor-pointer hover:opacity-80 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {title && title}
    </button>
  );
};

export default CusBtn;
