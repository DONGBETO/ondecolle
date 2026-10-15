import type { Metadata } from "next";
import { blogPosts } from "@/src/data/blog";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Footer from "@/src/components/Footer";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article introuvable",
      description: "Ce blog n'existe pas.",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <>
      <main>
        <Navbar />

        <Hero
          subtitle=""
          text=""
          description=""
          title="Détails du blog"
          image={post.image}
        />

        <article className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            {post.title}
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            {post.date} • {post.author} • {post.readingTime} •{" "}
            <span className="text-yellow-300 font-semibold">
              {post.category}
            </span>
          </p>

          <div className="text-gray-700 leading-7 whitespace-pre-line">
            {post.content}
          </div>

          <Link
            href="/actualites/blog"
            className="inline-block px-4 mt-8 text-sm text-white font-semibold bg-yellow-300 hover:bg-yellow-500 py-2 transition cursor-pointer rounded-xl scale-100 hover:scale-105"
          >
            Retour aux blogs
          </Link>
        </article>
      </main>

      <Footer />
    </>
  );
}