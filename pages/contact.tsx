import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 px-4 py-12 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <div className="space-y-4 text-lg">
          <div>
            <span className="font-semibold">Email: </span>
            <a href="mailto:srujankrishnac1@gmail.com" className="underline">srujankrishnac1@gmail.com</a>
          </div>
          <div>
            <span className="font-semibold">LinkedIn: </span>
            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/YOUR_LINKEDIN</a>
          </div>
          <div>
            <span className="font-semibold">GitHub: </span>
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="underline">github.com/YOUR_GITHUB</a>
          </div>
          <div>
            <span className="font-semibold">Location: </span>
            Telangana, India
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 