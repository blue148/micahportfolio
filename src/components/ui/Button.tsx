import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  children?: React.ReactNode;
  className?: string;
  color?: string;
  id?: string;
}

const Button = ({ to, children, className = "", color = "#C7CDA8", id }: ButtonProps) => {
  const baseClasses = `flex items-center justify-center rounded-lg font-semibold shadow-md ${className}`;
  const style = { backgroundColor: color };

  if (to) {
    return (
      <Link to={to} id={id} className={baseClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button id={id} className={baseClasses} style={style}>
      {children}
    </button>
  );
};

export default Button;