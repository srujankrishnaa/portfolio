import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "EDVISE App",
    date: "August 2024",
    description: "Innovative Educational Game Concept",
    tech: ["Unity", "Flutter", "Springboot", "ARCore", "PostgreSQL", "Gemini API", "TensorFlow"],
    achievements: [
      "Led a cross functional team of 5 members to develop a gamified learning platform where subjects are represented as cities, increasing student engagement by 100%.",
      "Designed interactive city environments to enhance subject understanding, resulting in a 90% improvement in student learning.",
      "Developed AR-based learning modules and chatbot assistance, providing real-time assistance and accessibility."
    ]
  },
  {
    title: "BONFIRE",
    date: "February 2025",
    description: "Flutter-based Therapeutic Community APP",
    tech: ["Flutter", "Unity", "Firebase", "Dart", "Dialogflow", "LLM"],
    achievements: [
      "Architected inclusive therapy group community feature enabling therapist-led discussions, supporting 150+ peer support sessions monthly.",
      "Pioneered innovative VR Rage Room & Meditation Room experiences, delivering immersive stress-relief solutions with 85% user satisfaction.",
      "Constructed advanced mood prediction system utilizing HRV data for real-time stress monitoring and integrated emotionally-trained LLM Companion."
    ]
  },
  {
    title: "MECHIDO APP",
    date: "May 2025",
    description: "Flutter-based Vehicle Service Booking & Tracking Solution APP",
    tech: ["Flutter", "Supabase", "PostgreSQL", "Dart", "Realtime Tracking", "UI/UX Design"],
    achievements: [
      "Engineered comprehensive Flutter-based vehicle service application with real-time mechanic tracking, reducing customer wait time uncertainty by 80%.",
      "Architected secure authentication and booking management using Supabase, writing custom PostgreSQL commands for tables, functions, and row-level security policies.",
      "Integrated Razorpay payment gateway for secure transaction processing and crafted an intuitive booking cart system and service selection interface."
    ]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 px-4 py-12 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 