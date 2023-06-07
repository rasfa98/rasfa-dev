import Link from "next/link";

const Post = ({ slug, frontmatter }: { slug: string; frontmatter: any }) => {
  return (
    <article key={slug}>
      <h2 className="text-2xl font-bold">
        <Link href={`/blog/${slug}`}>{frontmatter.title}</Link>
      </h2>
      <p>{frontmatter.date}</p>

      <p className="my-4">{frontmatter.excerpt.slice(0, 250) + "..."}</p>

      <div className="text-primary">
        <Link href={`/blog/${slug}`}>Read more &rarr;</Link>
      </div>
    </article>
  );
};

export default Post;
