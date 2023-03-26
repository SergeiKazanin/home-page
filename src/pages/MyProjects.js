import React, { useEffect, useState } from "react";
import { useGetProjectQuery } from "../store/projectApi";
import Skeleton from "@mui/material/Skeleton";

export default function MyProjects() {
  document.title = "Мои проекты - SergeiKazanin Home Page";

  const Card = ({ project }) => {
    console.log(project);
    const imgArr = project.poster.asset._ref.split("-");
    const imgLink = imgArr[1] + "-" + imgArr[2] + "." + imgArr[3];
    const img = `https://cdn.sanity.io/images/94p50dfz/production/${imgLink}`;

    return (
      <div className="w-[20rem] flex flex-col overflow-hidden border dark:border-none rounded-2xl shadow-md">
        <img src={img} alt={project.poster.caption}></img>

        <div className="p-2 flex flex-1 flex-col  items-center dark:bg-slate-600 border-t  dark:border-slate-500">
          <p className="">{project.description}</p>
          <div className="w-full flex flex-1 flex-col items-center justify-end">
            <a
              className="mt-2 flex items-center justify-center rounded-3xl hover:shadow-lg shadow-md w-3/4 h-10 dark:bg-indigo-800
                         dark:hover:bg-indigo-900 bg-indigo-300 hover:bg-indigo-400 transition-colors"
              target="_blank"
              rel="noreferrer"
              href={project.linkProtect}
            >
              Открыть проект
            </a>
            <a
              className="my-2 flex items-center justify-center rounded-3xl hover:shadow-lg shadow-md w-3/4 h-10 dark:bg-indigo-800
                         dark:hover:bg-indigo-900 bg-indigo-300 hover:bg-indigo-400 transition-colors"
              target="_blank"
              rel="noreferrer"
              href={project.linkGitHab}
            >
              Открыть GitHub
            </a>
          </div>
        </div>
      </div>
    );
  };
  let projects = [];
  const {
    isError,
    isFetching,
    data = [],
  } = useGetProjectQuery(`*[_type == "projects"]`);

  if (isFetching) {
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

  if (isError) {
    return <h2 className="text-4xl">Error</h2>;
  } else {
    projects = data.result;
  }

  if (!isError && projects?.length) {
    return (
      <div className="py-4 text-center">
        <h1>МОИ ПРОЕКТЫ</h1>
        <p className="mt-3">
          Приложения разработанные для обучнения и просто по фану.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {projects.map((project) => (
            <Card key={project.poster.asset._ref} project={project} />
          ))}
        </div>
      </div>
    );
  }
}
