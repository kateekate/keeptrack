import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  return (
    <>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;
