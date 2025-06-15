"use client";

import { useEffect } from "react";

export default function DevToolsMessage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(
        `%c🚀 Welcome, Explorer`,
        "font-size: 20px; font-weight: bold; background: linear-gradient(to right, #06b6d4, #8b5cf6); color: white; padding: 12px 20px; border-radius: 8px;",
      );
      console.log(
        `%c🔧 This interface was crafted by Barun Prasad\n🌐 https://barunprasad.com`,
        "color: #8b5cf6; font-size: 14px; font-weight: 500;",
      );
      console.log(
        `%c⚙️ Built with Next.js, Tailwind & 💡 endless curiosity.`,
        "color: #10b981; font-size: 13px;",
      );
    }
  }, []);

  return null;
}
