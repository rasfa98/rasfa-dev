import Heading from "@/components/heading";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Post from "../components/post";

export const metadata: Metadata = {
  title: "Latest posts",
  description:
    "A blog about web development and technology which aims to help developers improve their skills.",
};

export default async function Page() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <Heading>Latest posts</Heading>

      <div className="flex flex-col gap-y-8 my-10">
        {recentPosts.map((post: any, i: any) => (
          <Post {...post} key={i} />
        ))}

        <div className="ml-auto">
          <Link href="/blog">All posts &rarr;</Link>
        </div>
      </div>
    </>
  );
}
