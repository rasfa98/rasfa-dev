import Post from "@/types/post";
import sortByDate from "@/utils/sortByDate";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export const getAllPosts = async (): Promise<Post[]> => {
  const files = await fs.readdir(path.join("posts"));
  const posts = [];

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];

    const slug = filename.replace(".md", "");

    const markdownWithMeta = await fs.readFile(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const post = {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      content: content,
      image: frontmatter.image,
    };

    posts.push(post);
  }

  return posts.sort(sortByDate);
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const markdownWithMeta = await fs
    .readFile(path.join("posts", slug + ".md"), "utf-8")
    .catch(() => null);

  const { data: frontmatter, content } = matter(markdownWithMeta || "");

  const post = {
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    date: frontmatter.date,
    content: content,
    image: frontmatter.image,
  };

  return post;
};
