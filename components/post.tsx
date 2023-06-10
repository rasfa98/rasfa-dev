import Post from "@/types/post";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

const Post = (post: Post) => {
  const date = formatDate(post.date);

  return (
    <article key={post.slug}>
      <h2 className="text-2xl font-bold">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{date}</p>

      <p className="my-4 line-clamp-2">{post.excerpt}</p>

      <div>
        <Link href={`/blog/${post.slug}`}>Read more &rarr;</Link>
      </div>
    </article>
  );
};

export default Post;
