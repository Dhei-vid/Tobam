import { FC } from "react";

interface IButton {
  style: string;
  color: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<IButton> = ({ children, onClick, style, color }) => {
  return (
    <div
      className={`flex justify-center w-[10rem] cursor-pointer rounded p-3 border-[1px] transition duration-300 ease-in-out ${style} ${color}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
