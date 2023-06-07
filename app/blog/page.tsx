import Post from "@/components/post";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog posts",
  description: "Here you can find all of my blog posts.",
};

export default function Page() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-bold">Blog posts</h1>

      <div className="flex flex-col gap-y-8 my-10">
        {posts.map((post: any, i: any) => (
          <Post {...post} key={i} />
        ))}
      </div>
    </>
  );
}
