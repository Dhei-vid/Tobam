import { FC } from "react";
import Tag from "../blog/tag";
import Image from "next/image";
import DefaultImg from "../../asset/default_img.jpg";

interface IBlogHeader {
  title: string;
  date: string;
  tag: string;
  cover: string | null;
}

const BlogHeader: FC<IBlogHeader> = ({ title, date, tag, cover }) => {
  return (
    <div className={"flex flex-col gap-3 w-full"}>
      <div className={"w-fit"}>
        <Tag text={tag} bgColor={"bg-slate-100/50"} />
      </div>
      <p className={"font-semibold text-3xl"}>{title}</p>
      <p>{date}</p>
      <Image
        src={cover || DefaultImg}
        className={
          "w-full h-[28rem] object-cover rounded border-[1px] border-slate-200"
        }
        alt={`${title} image`}
        width={500}
        height={500}
      />
    </div>
  );
};

export default BlogHeader;
