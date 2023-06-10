import Post from "@/types/post";
import sortByDate from "@/utils/sortByDate";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getAllPosts = (): Post[] => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date,
      content: content,
      image: frontmatter.image,
    };
  });

  return posts.sort(sortByDate);
};

export const getPostBySlug = (slug: string): Post => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    date: frontmatter.date,
    content: content,
    image: frontmatter.image,
  };
};
