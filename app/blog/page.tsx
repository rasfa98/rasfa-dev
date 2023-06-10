import Heading from "@/components/heading";
import Post from "@/components/post";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog posts",
  description: "Here you can find all of my blog posts.",
  openGraph: {
    title: "Blog posts",
    description: "Here you can find all of my blog posts.",
  },
};

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <Heading>Blog posts</Heading>

      <div className="flex flex-col gap-y-8 my-10">
        {posts.map((post: any, i: any) => (
          <Post {...post} key={i} />
        ))}
      </div>
    </>
  );
}
