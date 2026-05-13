"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

if (typeof window !== "undefined" && window.gtag) {
  window.gtag("config", "G-QNVS3YYHHR", {
            page_path: url,
        });
    }
  }, [pathname, searchParams]);
}