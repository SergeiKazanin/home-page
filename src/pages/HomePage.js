import React from "react";

export default function HomePage() {
  document.title = "Главная - SergeiKazanin Home Page";
  return (
    <div className="py-4 text-center">
      <div className="bg-selfie mt-3 w-40 h-40 bg-cover mx-auto rounded-full shadow-xl"></div>
      <h1 className="mt-3">
        Здравствуйте! <br></br> Mеня зовут <strong>Сергей Казанин</strong>.
      </h1>
      <p className="mt-3">
        Занимаюсь веб разработкой. В качестве хобби разрабатывыаю электронные
        устройства на Arduino.
      </p>
    </div>
  );
}
