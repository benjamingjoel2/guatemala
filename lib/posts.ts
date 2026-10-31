import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { img, type ImageKey } from "@/data/images";
import type { PostMeta } from "@/data/types";
import { t, trusted } from "@/i18n/server";

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

// English posts sit in content/blog; translations in content/blog/{fr,de,es} with the same file names.
function readPost(file: string, locale = "en") {
  let p = path.join(locale === "en" ? POSTS_DIR : path.join(POSTS_DIR, locale), file);
  // While collecting strings for translation (I18N_COLLECT), untranslated posts fall back to English.
  if (process.env.I18N_COLLECT && !fs.existsSync(p)) p = path.join(POSTS_DIR, file);
  const raw = fs.readFileSync(p, "utf8");
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
    image: ((im) => ({ ...im, alt: t(im.alt) }))(img[fm.imageKey] ?? img.antiguaArchAgua),
  };
  // Posts are written per language, so their own text is already translated.
  trusted(meta.title, meta.excerpt, meta.category, meta.readingTime, meta.author);
  return { meta, content };
}

export function getAllPosts(locale = "en"): PostMeta[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readPost(f, locale).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, locale = "en") {
  const file = [`${slug}.mdx`, `${slug}.md`].find((f) => fs.existsSync(path.join(POSTS_DIR, f)));
  return file ? readPost(file, locale) : null;
}
