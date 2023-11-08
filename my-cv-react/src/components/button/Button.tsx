interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`${
        className && className
      } rounded-xl bg-gray-400 text-white py-1 px-2 hover:bg-gray-300 transition-all hover:scale-110  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "secondary" | "link" | "text" | "circle";
//   size?: "small" | "medium" | "big";
//   iconLeft?: React.ReactNode;
//   iconRight?: React.ReactNode;
//   fullWidth?: boolean;
//   disabled?: boolean;
//   classNameAdd?: string;
//   onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
//   type?: "button" | "submit" | "reset" | undefined;
// }

// const Button: React.FC<ButtonProps> = ({
//   variant = "primary",
//   size = "medium",
//   iconLeft,
//   iconRight,
//   type = "button",
//   classNameAdd,
//   fullWidth = false,
//   onClick,
//   disabled = false,
//   children,
//   ...props
// }) => {
//   let classNames = "";

//   switch (variant) {
//     case "secondary":
//       classNames += ` rounded border ${
//         disabled
//           ? "text-neutral-light-80 border-neutral-light-80 cursor-not-allowed"
//           : "bg-primary-light text-blue-400 border-blue-400 hover:text-blue-200 hover:bg-blue-65 hover:border-blue-200 focus:text-blue-200 focus:border-blue-200 focus:shadow-inner focus:bg-blue-65"
//       }`;
//       break;
//     case "link":
//       classNames += ` rounded ${
//         disabled
//           ? "cursor-not-allowed text-neutral-light-70"
//           : "text-blue-400 hover:underline focus:text-blue-200 focus:no-underline"
//       }`;
//       break;
//     case "text":
//       classNames += ` rounded ${
//         disabled
//           ? "cursor-not-allowed text-neutral-light-70"
//           : " text-blue-100 hover:bg-blue-50 focus:shadow-inner focus:bg-blue-65"
//       }`;
//       break;
//     case "circle":
//       classNames += ` rounded-full ${
//         disabled
//           ? "text-neutral-light-60 fill-neutral-light-60 cursor-not-allowed bg-neutral-light-40"
//           : "bg-neutral-light-10 text-blue-300 fill-blue-300 hover:bg-blue-50 focus:text-blue-200 focus:border-blue-100 focus:border focus:box-border focus:bg-transparent"
//       }`;
//       break;
//     default:
//       classNames += ` rounded ${
//         disabled
//           ? "cursor-not-allowed bg-neutral-light-40 text-neutral-light-80"
//           : "bg-blue-400 text-white hover:bg-blue-200 focus:shadow-inner focus:bg-blue-300"
//       }`;
//       break;
//   }

//   switch (size) {
//     case "small":
//       classNames += ` text-xs ${
//         variant === "circle" ? "p-2" : variant === "link" ? "p-0" : "px-3 h-8"
//       }`;
//       break;
//     case "big":
//       classNames += ` text-base ${
//         variant === "circle"
//           ? "p-[11px]"
//           : variant === "link"
//           ? "p-0"
//           : "px-5 h-12"
//       }`;
//       break;
//     default:
//       classNames += ` text-sm ${
//         variant === "circle"
//           ? "p-2.5"
//           : variant === "link"
//           ? "p-0"
//           : "px-4 h-10"
//       }`;
//       break;
//   }

//   if (fullWidth) {
//     classNames += " w-full";
//   }

//   if (iconLeft || iconRight) {
//     classNames += " flex items-center justify-center gap-1";
//   }

//   if (classNameAdd) {
//     classNames += ` ${classNameAdd}`;
//   }

//   return (
//     <button
//       className={classNames}
//       onClick={onClick}
//       disabled={disabled}
//       type={type}
//       {...props}
//     >
//       {iconLeft}
//       {children}
//       {iconRight}
//     </button>
//   );
// };

// export default Button;
