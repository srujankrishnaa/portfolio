import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
          GANDAMALLA SRUJAN KRISHNA
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8 text-center max-w-2xl">
          Android Developer | Full Stack Enthusiast | Tech Innovator
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">About</Link>
          <Link href="/projects" className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition">Projects</Link>
          <Link href="/contact" className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition">Contact</Link>
        </div>
        <div className="mt-10 text-gray-500 text-sm">
          Telangana, India | <a href="mailto:srujankrishnac1@gmail.com" className="underline">srujankrishnac1@gmail.com</a>
        </div>
      </main>
      <Footer />
    </div>
  );
} 