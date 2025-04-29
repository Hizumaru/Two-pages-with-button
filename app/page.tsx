"use client";

import React from "react";
import Link from "next/link";

const Layout: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Sean's Home Page!</h1>
      <Link href="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
};

export default Layout;