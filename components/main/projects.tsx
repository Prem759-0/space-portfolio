// c:\Users\Admin\OneDrive\Desktop\working website\full working website\portfolio-1\components\main\projects.tsx

// This component itself is a Server Component by default, as it doesn't use client-side hooks directly.
// The child `ProjectCard` is marked "use client" appropriately.

import { ProjectCard } from "@/components/sub/project-card"; // Correct path to ProjectCard
import { PROJECTS } from "@/constants"; // Import your projects data

export const Projects = () => {
  return (
    <section
      id="projects" // ID for navigation purposes
      className="flex flex-col items-center justify-center py-20" // Centering content and adding vertical padding
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      {/*
        This div is configured to create a responsive grid layout for your project cards.
        - `grid`: Enables CSS Grid layout.
        - `grid-cols-1`: On small screens (default mobile view), cards will stack one per column.
        - `md:grid-cols-2`: On medium screens (e.g., tablets), two cards will appear side-by-side per line.
        - `lg:grid-cols-3`: On large screens (e.g., desktops), three cards will appear side-by-side per line,
          fulfilling your requirement for "fixed three cards in every line" on larger displays.
        - `gap-10`: Provides consistent spacing between the grid items (project cards).
        - `px-10`: Horizontal padding for the grid container.
      */}
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-[1280px]"> {/* Added max-w for content width constraint */}
        {/*
          Map over the PROJECTS array from your constants to render each project.
          Each project object is passed as props to the ProjectCard component.
        */}
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title} // `key` is crucial for React list rendering performance and stability
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
