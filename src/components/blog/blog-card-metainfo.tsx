"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { formatDate } from "@/common/helper";

interface IBlogCardMetaInfo {
  id: number;
  date: string;
  readTime: string;
  link: string;
}

const BlogCardMetaInfo: FC<IBlogCardMetaInfo> = ({
  id,
  date,
  readTime,
  link,
}) => {
  const router = useRouter();

  const formatedDate = formatDate(new Date(date));

  return (
    <div className={"flex flex-row justify-between items-center"}>
      <div className={"flex flex-row gap-3 text-xs"}>
        <p>{formatedDate}</p>
        <p className={"hidden md:block"}>|</p>
        <p className={"hidden md:block"}>{readTime} min read</p>
      </div>

      <div
        onClick={() => router.push(`/BlogDetails/${id}`)}
        className={
          "flex flex-row gap-2 cursor-pointer text-xs text-primary underline underline-offset-8"
        }
      >
        <p>View Post</p>
      </div>
    </div>
  );
};

export default BlogCardMetaInfo;
