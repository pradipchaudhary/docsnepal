// components/ComingSoon.tsx
"use client";

import React from "react";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Coming Soon
      </h1>
      <p className="text-gray-600 text-lg md:text-xl">
        We are working hard to bring something amazing. Stay tuned!
      </p>
    </div>
  );
}
