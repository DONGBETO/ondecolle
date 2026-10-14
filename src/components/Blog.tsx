import Link from "next/link";
import BlogCard from "./blogCard";
import { blogPosts } from "../data/blog";

type Props = {
  page?: string ;
};

export default function Blog({ page }: Props) {
  
  const postsPerPage = 6;

  const totalPages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));

  // Une valeur invalide (?page=abc, ?page=999) ne doit pas afficher une page vide.
  const parsedPage = parseInt(page || "1", 10);
  const currentPage = Number.isNaN(parsedPage)
    ? 1
    : Math.min(Math.max(parsedPage, 1), totalPages);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          NOS ARTICLES
        </h2>

        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
            <Link 
                key={page}
                href={`/actualites/blog?page=${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                    currentPage === page
                    ? "bg-yellow-400 text-white"
                    : "bg-transparent text-gray-700 hover:bg-gray-200"
                }`}
                scroll={true}
                >
                {page}
            </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}