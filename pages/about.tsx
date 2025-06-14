import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 px-4 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Bachelor of Engineering in Computer Science and Business Systems</strong> (CGPA: 8.52/10), Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad, Nov 2022 - July 2026
            </li>
            <li>
              <strong>Intermediate: MPC (97.4%)</strong>, Sri Chaitanya Junior College, Hyderabad, June 2021
            </li>
            <li>
              <strong>10th Grade (GPA: 9.7/10)</strong>, Sri Chaitanya School, Hyderabad, June 2019
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Android Developer - Google for Developers</strong>, Virtual Internship, Hyderabad, Apr 2024 – Jun 2024
              <ul className="list-disc list-inside ml-6">
                <li>Completed a comprehensive virtual internship focused on core Android app development concepts, tools, and best practices.</li>
                <li>Integrated RESTful APIs and managed data persistence using SQLite and Room Database, enhancing app functionality by 60%.</li>
                <li>Engineered responsive Android interfaces using RecyclerView, ViewModel, and LiveData, improving UI loading speeds by 40% and reducing user-reported lags by 25%.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">C</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">R</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Dart</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">PostgreSQL</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">HTML</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">CSS</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">JavaScript</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Flutter</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Flask</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">TensorFlow</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">NumPy</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Pandas</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Matplotlib</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Android Studio</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Git</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Vercel</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Docker</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Apache Kafka</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Supabase</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Digital Marketing</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">Google Cloud Platform</span>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Certifications & Awards</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Eduskills Android Developer Virtual Internship</li>
            <li>Google Cloud Career Readiness Certificate - Cloud Computing Foundations</li>
            <li>Infosys Springboard - Mastering Flutter Certification</li>
            <li>Google Foundations of Digital Marketing and E-commerce Certification</li>
            <li>Awarded First Place in the TechXcelerate hackathon for EDVISE APP at IIT Hyderabad</li>
            <li>Awarded Third Place in the TechXcelerate hackathon for Bonfire APP at BITS Goa</li>
            <li>Secured AIR 14,381 - NCAT 2025 among 1,00,000+ engineering graduates</li>
            <li>Street Cause, Vice-president GRIET 2024 – Present</li>
            <li>Executive Lead, Skill development center, Events Team 2023 – Present</li>
            <li>Sponsorship team, TEDX GRIET, Events Team 2024 - present</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
} 