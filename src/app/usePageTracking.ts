"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { pageview } from "@/src/lib/gtag";

export default function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // La première page vue est déjà envoyée par gtag('config') dans le layout :
    // on ne la renvoie pas pour éviter de la compter deux fois.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const query = searchParams.toString();
    pageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);
}
