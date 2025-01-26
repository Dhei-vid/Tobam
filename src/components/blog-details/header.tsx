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
      <Tag text={tag} />
      <p>{title}</p>
      <p>{date}</p>
      <Image
        src={cover || DefaultImg}
        className={"w-full h-[30rem] object-cover rounded"}
        alt={`${title} image`}
        width={500}
        height={500}
      />
    </div>
  );
};

export default BlogHeader;
