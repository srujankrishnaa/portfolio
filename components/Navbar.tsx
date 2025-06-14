import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 border-b border-gray-200">
      <Link href="/" className="text-xl font-bold tracking-tight">
        GANDAMALLA SRUJAN KRISHNA
      </Link>
      <div className="space-x-6">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
} 