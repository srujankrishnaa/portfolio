import React from "react";

type Project = {
  title: string;
  date: string;
  description: string;
  tech: string[];
  achievements: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <div className="text-gray-500 text-sm mb-2">{project.date}</div>
      <p className="mb-4 text-gray-700">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm">
        {project.achievements.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
} 