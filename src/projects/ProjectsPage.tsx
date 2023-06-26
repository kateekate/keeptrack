import React, { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

function ProjectsPage() {
  const [projects, setProject] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProject(updatedProjects);
  };
  return (
    <>
      <ProjectList onSave={saveProject} projects={projects} />
    </>
  );
}

export default ProjectsPage;
