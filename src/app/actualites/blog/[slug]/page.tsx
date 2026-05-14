import type { Metadata } from "next";
import { blogPosts } from "@/src/data/blog";
import { notFound } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Footer from "@/src/components/Footer";
import Link from "next/link";   
import { Music2 } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

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
  const { slug } = params;

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
            {post.date} • {post.author} • {post.readingTime} • <span className="text-yellow-300 font-semibold">
                {post.category}
            </span>
        </p>

        <div className="text-gray-700 leading-7 whitespace-pre-line">
            {post.content}
        </div>

        <Link href="/actualites/blog">
            <button className="px-4 mt-8 text-sm text-white font-semibold bg-yellow-300 hover:bg-yellow-500 py-2 transition cursor-pointer rounded-xl scale-100 hover:scale-105">
                Retour aux blogs
            </button>
        </Link>
        </article>
        
    </main>
        <Footer
            logo="/assets/logos/logoo.png"
            description="Notre mission : détecter, accompagner et propulser la jeunesse africaine vers le succès."
            links={[
                { label: "Bibliothèque", href: "/actualites/bibliotheque" },
                { label: "Évènements", href: "/actualites/evenements" },
                { label: "Projets", href: "/projets" },
                { label: "Blog", href: "/actualites/blog" },
                { label: "Contacts", href: "/contacts" },
                { label: "À propos", href: "/a-propos" },
            ]}
            socials={[
                { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/habib.aboukhedoud?rdid=Qlwp9rC6zFwqE4bA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvTBznrbT%2F#", target: "_blank" },
                { icon: <FaInstagram size={18} />, href: "https://instagram.com/habib_aboukhedoud?igsh=MWxheWNzenFpeWl4Yg==", target: "_blank" },
                { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/habib-aboukhedoud-b7044a186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", target: "_blank" },
                { icon: <Music2 size={18} />, href: "https://www.tiktok.com/@habibaboukhedoud?_r=1&_t=ZM-923QmkKsrxT", target: "_blank" }, 
            ]}
        />
    </>
  );
}