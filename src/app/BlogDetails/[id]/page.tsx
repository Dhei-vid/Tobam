"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBlogById } from "@/common/util";
import BlogHeader from "@/components/blog-details/header";
import { BlogDetailsType } from "@/common/type";
import { Spinner } from "@radix-ui/themes";
import { formatDate } from "@/common/helper";

const BlogDetails = () => {
  const params = useParams();
  const [blogData, setBlogData] = useState<BlogDetailsType | null>(null);
  const formatedDate =
    params?.date && typeof params.date === "string"
      ? formatDate(new Date(params.date))
      : "Invalid date";

  useEffect(() => {
    const fetchBlogData = async () => {
      const blogData = await getBlogById(
        Array.isArray(params?.id) ? params.id[0] : params?.id
      );
      setBlogData(blogData);
    };
    fetchBlogData();
  }, [params]);

  return (
    <div className={"p-12"}>
      {blogData ? (
        <div>
          <BlogHeader
            title={blogData?.title}
            date={formatedDate}
            tag={blogData?.tags[0]}
            cover={
              blogData?.cover_image
                ? blogData?.cover_image
                : blogData?.social_image
            }
          />
        </div>
      ) : (
        <div className={"flex flex-col justify-center items-center h-96"}>
          <Spinner size={"3"} />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
