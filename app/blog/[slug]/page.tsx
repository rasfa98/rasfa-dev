import { getAllPosts, getPostBySlug } from "@/lib/api";
import { marked } from "marked";

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-bold">
        {post.frontmatter.title}
      </h1>

      <article
        className="my-10 prose"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </>
  );
}
