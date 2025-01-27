import BG from "../../asset/png_blog_bg..png";
import LazyBG from "../../asset/lazy_png_blog_bg..jpg";
import Image from "next/image";
import LazyBackground from "../general/background";

const BlogHero = () => {
  return (
    <LazyBackground
      className={"w-auto h-[25rem]"}
      placeholder={"BG image"}
      src={BG}
    >
      <div
        className={
          "flex flex-col gap-3 items-center justify-center p-20 h-[25rem] text-white"
        }
      >
        <h1 className={"text-4xl font-bold text-center"}>
          Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest
          Industry Insights
        </h1>
        <p className={""}>
          Insights that inspire success: uncover a wealth of knowledge by
          staying updated
        </p>
      </div>
    </LazyBackground>
  );
};

export default BlogHero;
