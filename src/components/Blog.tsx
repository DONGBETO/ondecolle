import Link from "next/link";
import BlogCard from "./blogCard";
import { blogPosts } from "../data/blog";

type Props = {
  searchParams: { page?: string };
};


export default function Blog({ searchParams }: Props) {
  const postsPerPage = 6;

  const currentPage = parseInt(searchParams?.page || "1", 10);
  

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
          NOS ARTICLES
        </h1>

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