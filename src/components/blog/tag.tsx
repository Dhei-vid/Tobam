import { FC } from "react";

interface ITag {
  text: string;
}

const Tag: FC<ITag> = ({ text }) => {
  return (
    <div className={"bg-white/75 p-2 rounded"}>
      <p className={"capitalize text-xs text-primary"}>{text}</p>
    </div>
  );
};

export default Tag;
