"use client";

import { Suspense } from "react";
import usePageTracking from "@/src/app/usePageTracking";

function PageTracker() {
  usePageTracking();
  return null;
}

// useSearchParams() doit être rendu dans un <Suspense>, sinon `next build`
// échoue sur les pages statiques (missing-suspense-with-csr-bailout).
export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <PageTracker />
    </Suspense>
  );
}
