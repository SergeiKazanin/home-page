import React from "react";

export default function MyProjects() {
  document.title = "Мои проекты - SergeiKazanin Home Page";

  const projects = [
    {
      bgImg: "bg-dictionary",
      descriptions:
        "Словарь с изспользованием API, Tailwind CSS, redux toolkit, RTK Query, dark theme, Material UI",
      linkProtect: "https://sergeikazanin.github.io/dictionary-on-react/",
      linkGitHab: "https://github.com/SergeiKazanin/dictionary-on-react",
    },
    {
      bgImg: "bg-weather",
      descriptions: "Погода с использованием API openweathermap.org",
      linkProtect:
        "https://sergeikazanin.github.io/weather-js-app-with-adaptive/",
      linkGitHab:
        "https://github.com/SergeiKazanin/weather-js-app-with-adaptive",
    },
    {
      bgImg: "bg-snake",
      descriptions: "Игра змейка на canvas и js",
      linkProtect: "https://sergeikazanin.github.io/Snake/",
      linkGitHab: "https://github.com/SergeiKazanin/Snake",
    },
    {
      bgImg: "bg-co2mert",
      descriptions: "Измеритель углекислого газа и PM 2.5 частиц в воздухе",
      linkProtect: "https://github.com/SergeiKazanin/carbon-dioxide-meter",
      linkGitHab: "https://github.com/SergeiKazanin/carbon-dioxide-meter",
    },
    {
      bgImg: "bg-test",
      descriptions: "Тест с использованием API",
      linkProtect: "https://sergeikazanin.github.io/TestingSystem-front",
      linkGitHab: "https://github.com/SergeiKazanin/TestingSystem-front",
    },
    {
      bgImg: "bg-login",
      descriptions: "Авторизация",
      linkProtect: "https://sergeikazanin.github.io/Login-Page-UI/",
      linkGitHab: "https://github.com/SergeiKazanin/Login-Page-UI",
    },
  ];

  const Card = ({project}) => {
    return (
      <div className="w-[20rem] flex flex-col overflow-hidden border dark:border-none rounded-md shadow-md transition-all hover:shadow-lg">
        <div
          className={`w-full bg-cover bg-no-repeat dark:bg-slate-600 bg-center pb-[78%] ${project.bgImg}`}
        ></div>
        <div className="p-2 flex flex-1 flex-col  items-center dark:bg-slate-600 border-t  dark:border-slate-400">
          <p className="">{project.descriptions}</p>
          <div className="w-full flex flex-1 flex-col items-center justify-end">
            <a
              className="mt-2 flex items-center justify-center rounded-md w-3/4 h-10 bg-indigo-300 transition-colors hover:bg-indigo-400"
              target="_blank"
              rel="noreferrer"
              href={project.linkProtect}
            >
              Открыть проект
            </a>

            <a
              className="mt-2 mb-2 flex items-center justify-center rounded-md w-3/4 h-10 bg-indigo-300 transition-colors hover:bg-indigo-400"
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
  return (
    <div className="py-4 text-center">
      <h1>МОИ ПРОЕКТЫ</h1>
      <p className="mt-3">
        Приложения разработанные для обучнения и просто по фану.
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        {projects.map((project) => (
          <Card key={project.bgImg} project ={project}/>
        ))}
      </div>
    </div>
  );
}
