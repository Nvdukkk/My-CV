interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={` rounded-xl bg-gray-400 text-white py-1 px-2 hover:bg-gray-300 transition-all hover:scale-110  ${
        className && className
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
