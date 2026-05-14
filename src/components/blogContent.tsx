// src/components/blogContent.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Blogs from "@/src/components/Blog";

function BlogContentInner() {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  return <Blogs page={page} />;
}

export default function BlogContent() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <BlogContentInner />
    </Suspense>
  );
}