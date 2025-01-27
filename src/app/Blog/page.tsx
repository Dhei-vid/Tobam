import BlogHero from "@/components/blog/hero";
import BlogMain from "@/components/blog/blog-body";
import Footer from "@/components/navigation/footer";

const BlogHome = () => {
  return (
    <div className={"w-full"}>
      <BlogHero />
      <BlogMain />
      <Footer />
    </div>
  );
};

export default BlogHome;
