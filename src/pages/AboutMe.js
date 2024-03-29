import React from "react";

export default function AboutMe() {
  document.title = "Обо мне - SergeiKazanin Home Page";
  return (
    <div className="py-4 ">
      <h1 className="mt-3">
        <strong>ОБО МНЕ</strong>
      </h1>
      <p className="mt-3">
        Всем привет и добро пожаловать в раздел обо мне! Меня зовут Сергей
        Казанин и я занимаюсь веб разработкой. В качестве хобби разрабатываю
        электронные устройства на Arduino.
      </p>
      <h1 className="mt-3 ">
        <strong>НАВЫКИ</strong>
      </h1>
      <ul className="mt-3 flex flex-wrap gap-2">
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">
          React, Redux, Redux Toolkit, RTK Query, React Router, Zustand, React
          query, Axios, Formik, React hook form
        </li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">
          JavaScript
        </li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">
          TypeScript
        </li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">HTML</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">
          CSS, SCSS, Tailwind CSS, Material UI, Bootstrap
        </li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">
          Node, Express
        </li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">Next</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">GitHub</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">Figma</li>
        <li className="rounded-2xl  text-white bg-indigo-600 px-2">
          C, Arduino, PlatformIO
        </li>
      </ul>
      <p className="mt-3">
        Самый важный навык — это умение учиться и никогда не сдаваться.
      </p>
    </div>
  );
}
