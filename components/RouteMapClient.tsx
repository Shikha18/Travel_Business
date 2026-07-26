"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window`/`navigator` at import time, which breaks server
// rendering — load it only in the browser. This wrapper is the client
// boundary that makes `ssr: false` legal (Server Components can't call it).
const RouteMap = dynamic(() => import("./RouteMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[320px] w-full animate-pulse rounded-2xl border border-ink-900/5 bg-cream-100" />
  ),
});

export default RouteMap;
