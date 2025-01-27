"use client";
import { useEffect, useState } from "react";
import BlogCard from "./blog-card";
import { getBlog } from "@/common/util";
import Button from "../general/button";
import NewsLetter from "../general/newsletter";

const BlogMain = () => {
  const [blogs, setBlogs] = useState([]);
  const [displayCount, setDisplayCount] = useState<number>(6);

  useEffect(() => {
    (async () => {
      const blogData = await getBlog();
      setBlogs(blogData);
    })();
  }, []);

  return (
    <div className={"p-5"}>
      <h1>Stay Updated with the Latest trends in Tobams Group </h1>
      <div className={"flex flex-col jusitfy-center items-center"}>
        <div>Search functionality</div>

        <div className={"grid grid-cols-1 md:grid-cols-3 gap-8 p-12"}>
          {blogs
            .slice(0, displayCount)
            .map(
              ({
                id,
                title,
                cover_image,
                created_at,
                description,
                reading_time_minutes,
                tag_list,
                url,
              }) => {
                return (
                  <BlogCard
                    key={id}
                    id={id}
                    title={title}
                    cover={cover_image}
                    description={description}
                    dateCreated={created_at}
                    tagList={tag_list}
                    readTime={reading_time_minutes}
                    link={url}
                  />
                );
              }
            )}
        </div>

        <Button
          style={""}
          onClick={() => setDisplayCount(displayCount + 3)}
          color={
            "border-primary text-primary hover:text-white hover:bg-primary"
          }
        >
          <p>Load More</p>
        </Button>

        <div className={"w-full mt-12"}>
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
