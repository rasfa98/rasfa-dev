import Heading from "@/components/heading";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { marked } from "marked";
import { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`/${post.image}`] : [],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <Heading>{post.title}</Heading>

      {post.image && (
        <div className="relative aspect-[2/1] my-10">
          <Image
            src={`/${post.image}`}
            alt={post.title}
            className="object-cover"
            fill
          />
        </div>
      )}

      <article
        className="prose max-w-none my-10"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </>
  );
}
