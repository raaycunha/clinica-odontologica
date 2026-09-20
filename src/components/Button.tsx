import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  className: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseStyle = `
    flex 
    justify-center 
    items-center 
    gap-2 
    w-full 
    max-w-100 
    rounded-lg 
    font-plus
    cursor-pointer

    lg:w-max
  `;
  const variants = {
    primary: `
      bg-[#1E63D4] 
      text-white 
      font-medium 

      transition-opacity 
      duration-300 
      hover:opacity-75
    `,
    secondary: `
      bg-white 
      border 
      border-[#1E63D4]  
      font-semibold 
      text-[#1f72f7]
      
      transition-colors 
      duration-400 
      hover:bg-[#1E63D4]/20
      
      lg:justify-start
    `,
  };
  const classes = `${baseStyle} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
