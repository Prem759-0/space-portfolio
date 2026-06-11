// c:\Users\Admin\OneDrive\Desktop\working website\full working website\portfolio-1\components\sub\project-card.tsx

"use client"; // This component uses useState, so it needs to be a client component in Next.js

import React, { useState } from "react";
import Image from "next/image"; // Assuming Next.js Image component for optimization

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

// Define a maximum length for the description before it gets truncated
// You can adjust this value to control how much text is initially visible.
const DESCRIPTION_MAX_LENGTH = 150;

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  // State to manage whether the full description is shown or truncated
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the description text is longer than the set maximum length
  const needsTruncation = description.length > DESCRIPTION_MAX_LENGTH;

  // The description text that will actually be displayed
  const displayedDescription =
    needsTruncation && !isExpanded
      ? description.substring(0, DESCRIPTION_MAX_LENGTH) + "..." // Truncate and add ellipsis
      : description; // Show full description

  // Function to toggle the expanded state
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4 bg-[#030014] hover:bg-[#030014]/50 transition-all duration-200">
      {/* Project Image */}
      <Image
        src={src}
        alt={title}
        width={500} // You might want to make these dynamic or adjust based on your design system
        height={300} // Ensuring a consistent aspect ratio if possible
        className="w-full h-auto object-cover rounded-md mb-4" // object-cover helps image fill space without distortion
      />

      <div className="relative">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 leading-relaxed text-sm"> {/* Added text-sm for slightly smaller text */}
          {displayedDescription}
        </p>

        {/* Render "Read More/Less" button only if the description was truncated */}
        {needsTruncation && (
          <button
            onClick={toggleDescription}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium focus:outline-none mt-2 transition-colors duration-200 underline" // Added underline for better clickability
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        {/* Link to the actual project */}
        <a
          href={link}
          target="_blank" // Opens link in a new tab
          rel="noreferrer noopener" // Security best practice for target="_blank"
          className="block mt-4 text-cyan-400 hover:text-cyan-300 text-base font-medium transition-colors duration-200"
        >
          View Project &rarr;
        </a>
      </div>
    </div>
  );
};
