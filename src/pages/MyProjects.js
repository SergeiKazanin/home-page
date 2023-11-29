import CardProject from "../components/CardProject";
import { useLoaderData } from "react-router";

export default function MyProjects() {
  document.title = "Мои проекты - SergeiKazanin Home Page";

  let projects = useLoaderData();

  if (projects?.length) {
    return (
      <div className="py-4 text-center">
        <h1>МОИ ПРОЕКТЫ</h1>
        <p className="mt-3">
          Приложения разработанные для обучнения и просто по фану.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {projects.map((project) => (
            <CardProject key={project.poster.asset._ref} project={project} />
          ))}
        </div>
      </div>
    );
  }
}
