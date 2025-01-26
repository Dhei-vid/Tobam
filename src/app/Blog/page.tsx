import BlogHero from "@/components/blog/hero";
import BlogMain from "@/components/blog/blog-body";

const BlogHome = () => {
  return (
    <div className={"w-full"}>
      <BlogHero />
      <BlogMain />
    </div>
  );
};

export default BlogHome;
