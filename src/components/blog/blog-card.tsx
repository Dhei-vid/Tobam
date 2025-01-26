import { FC } from "react";
import Image from "next/image";
import Tag from "./tag";
import BlogCardMetaInfo from "./blog-card-metainfo";
import DefaultImg from "../../asset/default_img.jpg";

interface IBlogCard {
  id: number;
  title: string;
  description: string;
  cover: string | null;
  dateCreated: string;
  readTime: string;
  link: string;
  tagList: string[];
}

const BlogCard: FC<IBlogCard> = ({
  id,
  title,
  cover,
  dateCreated,
  description,
  link,
  tagList,
  readTime,
}) => {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"relative"}>
        <Image
          className={"object-cover h-[15rem] rounded-t-lg brightness-50"}
          alt={`${cover} cover`}
          src={cover || DefaultImg}
          width={500}
          height={600}
        />
        <div className={"absolute top-2 left-2 "}>
          <Tag text={tagList[0]} />
        </div>
      </div>

      <div className={"flex flex-col gap-5"}>
        <h1 className={"font-semibold h-12 overflow-hidden"}>{title}</h1>
        <p className={"font-light text-sm"}>{description}</p>
      </div>

      <BlogCardMetaInfo
        id={id}
        date={dateCreated}
        readTime={readTime}
        link={link}
      />
    </div>
  );
};

export default BlogCard;
