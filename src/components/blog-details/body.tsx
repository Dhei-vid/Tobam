import { FC } from "react";
import { compile, convert } from "html-to-text";

interface IBlogBody {
  body: string;
}

const BlogBody: FC<IBlogBody> = ({ body }) => {
  const plainText = convert(body);

  return <div>{plainText}</div>;
};

export default BlogBody;
