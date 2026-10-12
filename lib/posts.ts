import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { img, type ImageKey } from "@/data/images";
import type { PostMeta } from "@/data/types";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

type Frontmatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  imageKey: ImageKey;
  author: string;
};

function readPost(file: string) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;
  const meta: PostMeta = {
    slug: file.replace(/\.mdx?$/, ""),
    title: fm.title,
    excerpt: fm.excerpt,
    date: fm.date,
    category: fm.category,
    readingTime: fm.readingTime,
    author: fm.author,
    image: img[fm.imageKey] ?? img.antiguaArchAgua,
  };
  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readPost(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = [`${slug}.mdx`, `${slug}.md`].find((f) => fs.existsSync(path.join(POSTS_DIR, f)));
  return file ? readPost(file) : null;
}
