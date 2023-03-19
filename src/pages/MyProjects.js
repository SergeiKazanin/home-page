import React from "react";

export default function MyProjects() {
  document.title = "Мои проекты - SergeiKazanin Home Page";

  const Card = ({ bgImg, linkProtect, linkGitHab }) => {
    return (
      <div className="w-[20rem] overflow-hidden rounded-md shadow-md transition-all hover:shadow-lg">
        <div
          className={`w-full bg-cover bg-no-repeat bg-center pb-[78%] ${bgImg}`}
        ></div>
        <div className="p-2 dark:bg-slate-600 border-t border-slate-600 dark:border-slate-400">
          <a target="_blank" rel="noreferrer" href={linkProtect}>
            Открыть проект
          </a>
          <br></br>
          <a target="_blank" rel="noreferrer" href={linkGitHab}>
            Открыть GitHub
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="py-4 text-center">
      <h1>МОИ ПРОЕКТЫ</h1>
      <p>Приложения разработанные для обучнения и просто по фану.</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <Card
          bgImg={"bg-snake"}
          linkProtect={"https://sergeikazanin.github.io/Snake/"}
          linkGitHab={"https://github.com/SergeiKazanin/Snake"}
        />
        <Card
          bgImg={"bg-co2mert"}
          linkProtect={"https://github.com/SergeiKazanin/carbon-dioxide-meter"}
          linkGitHab={"https://github.com/SergeiKazanin/carbon-dioxide-meter"}
        />
        <Card
          bgImg={"bg-dictionary"}
          linkProtect={"https://sergeikazanin.github.io/dictionary-on-react/"}
          linkGitHab={"https://github.com/SergeiKazanin/dictionary-on-react"}
        />
        <Card
          bgImg={"bg-test"}
          linkProtect={"https://sergeikazanin.github.io/TestingSystem-front"}
          linkGitHab={"https://github.com/SergeiKazanin/TestingSystem-front"}
        />
        <Card
          bgImg={"bg-weather"}
          linkProtect={
            "https://sergeikazanin.github.io/weather-js-app-with-adaptive/"
          }
          linkGitHab={
            "https://github.com/SergeiKazanin/weather-js-app-with-adaptive"
          }
        />
        <Card
          bgImg={"bg-login"}
          linkProtect={"https://sergeikazanin.github.io/Login-Page-UI/"}
          linkGitHab={"https://github.com/SergeiKazanin/Login-Page-UI"}
        />
      </div>
    </div>
  );
}
