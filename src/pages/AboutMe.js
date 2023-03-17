import React from "react";

export default function AboutMe() {
  document.title = "Обо мне - SergeiKazanin Home Page";
  return (
    <div className="py-4 h-full">
      <h1 className="mt-3">
        {" "}
        <strong>ОБО МНЕ</strong>
      </h1>
      <p className="mt-3">
        Всем привет и добро пожаловать в раздел обо мне! Меня зовут Сергей
        Казанин и я занимаюсь веб разработкой. В качестве хобби разрабатывыаю проекты на Arduino.
      </p>
      <h1 className="mt-3 ">
        <strong>НАВЫКИ</strong>
      </h1>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">HTML</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">CSS, SCSS, Tailwind CSS, Material UI</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">JavaScript</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">ReactJs, Redux, Redux Toolkit, RTK Query</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">NodeJs, Express</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">GitHub</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">Figma</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">C, Arduino, PlatformIO</li>
      </ul>
      <p className="mt-3">
        Самый важный навык — это умение учиться и никогда не сдаваться.
      </p>
    </div>
  );
}
