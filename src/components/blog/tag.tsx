import { FC } from "react";

interface ITag {
  text: string;
  bgColor?: string;
}

const Tag: FC<ITag> = ({ text, bgColor }) => {
  return (
    <div className={`${bgColor ? bgColor : "bg-white/75"} p-2 rounded`}>
      <p className={"capitalize text-xs text-primary"}>{text}</p>
    </div>
  );
};

export default Tag;
