import { ReactNode } from "react";

interface Props {
  children: string;
  onClick: ReactNode;
}

const Button = ({children, onClick}: Props) => {
  return (
    <button type="button" className="btn btn-secondary" >
      {children}
      clickHandler= {onClick}
    </button>
  );
};

export default Button;
