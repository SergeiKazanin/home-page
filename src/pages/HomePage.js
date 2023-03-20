import React from "react";
import GitSvg from "../components/svg/GitSvg";
import TelegSvg from "../components/svg/TelegSvg";

export default function HomePage() {
  document.title = "Главная - SergeiKazanin Home Page";
  return (
    <div className="py-4 text-center">
      <div className="bg-selfie mt-3 w-52 h-52 bg-cover mx-auto rounded-full shadow-xl"></div>
      <h1 className="mt-3">
        Здравствуйте! <br></br> Mеня зовут <strong>Сергей Казанин</strong>.
      </h1>
      <p className="mt-3">
        Занимаюсь веб разработкой. В качестве хобби разрабатывыаю электронные
        устройства на Arduino.
      </p>
      <p className="mt-36">Мой телеграм и гитхаб.</p>
      <div className="flex justify-center gap-4 mt-3">
        <a
          className="transition-colors hover:scale-105"
          href="https://t.me/SergeiKazanin76"
          target="_blank"
          rel="noreferrer"
        >
          <TelegSvg />{" "}
        </a>
        <a
          className="transition-colors hover:scale-105"
          href="https://github.com/SergeiKazanin"
          target="_blank"
          rel="noreferrer"
        >
          <GitSvg />
        </a>
      </div>
    </div>
  );
}
