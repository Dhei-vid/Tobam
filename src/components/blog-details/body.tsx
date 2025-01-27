import { FC } from "react";
import { compile, convert } from "html-to-text";

interface IBlogBody {
  body: string;
}

const BlogBody: FC<IBlogBody> = ({ body }) => {
  const plainText = convert(body);

  return (
    <div>
      <div>{plainText}</div>
      <div className="my-5">{body}</div>
    </div>
  );
};

export default BlogBody;
