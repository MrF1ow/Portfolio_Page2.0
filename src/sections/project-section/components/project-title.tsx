/*
 * This component is used to display the title of the project.
 *
 * @param {string} title - The title of the project
 * @returns {JSX.Element}
 */
function ProjectTitle({ title }: { title: string }): JSX.Element {
  return (
    <div className="flex flex-row w-full">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
    </div>
  );
}

export default ProjectTitle;
