import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Post from "../components/post";

export const metadata: Metadata = {
  title: "Latest posts",
  description:
    "A blog about web development and technology which aims to help developers improve their skills.",
};

export default function Page() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <h1 className="font-bold text-4xl sm:text-6xl">Latest posts</h1>

      <div className="flex flex-col gap-y-8 my-10">
        {recentPosts.map((post: any, i: any) => (
          <Post {...post} key={i} />
        ))}

        <div className="text-primary ml-auto">
          <Link href="/blog">All posts &rarr;</Link>
        </div>
      </div>
    </>
  );
}
