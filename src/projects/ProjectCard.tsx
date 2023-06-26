import React from "react";
import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;
  function handleEditClicked(projectBeingEdited: Project) {
    onEdit(projectBeingEdited);
  }
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{project.description}</p>
        <p>Budget: {project.budget.toLocaleString()}</p>
        <button className="bordered" onClick={() => handleEditClicked(project)}>
          <span className="icon-edit"></span> Edit{" "}
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;
