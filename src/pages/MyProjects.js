import Skeleton from "@mui/material/Skeleton";
import CardProject from "../components/CardProject";

export default function MyProjects() {
  document.title = "Мои проекты - SergeiKazanin Home Page";

  let projects = [];
  // const {
  //   isError,
  //   isFetching,
  //   data = [],
  // } = useGetProjectQuery(`*[_type == "projects"] | order(_createdAt desc)`);

  if (0) {
    return (
      <div className="py-4 text-center">
        <h1>МОИ ПРОЕКТЫ</h1>
        <p className="mt-3">
          Приложения разработанные для обучнения и просто по фану.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Skeleton variant="rounded" width={320} height={470} />
          <Skeleton variant="rounded" width={320} height={470} />
          <Skeleton variant="rounded" width={320} height={470} />
          <Skeleton variant="rounded" width={320} height={470} />
          <Skeleton variant="rounded" width={320} height={470} />
          <Skeleton variant="rounded" width={320} height={470} />
        </div>
      </div>
    );
  }

  if (!0 && projects?.length) {
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
