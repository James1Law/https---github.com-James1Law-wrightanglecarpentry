"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
