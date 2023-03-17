import React from "react";

export default function HomePage() {
  document.title = "Главная - SergeiKazanin Home Page";
  return (
    <div className="py-4 text-center">
      <img className="rounded-full mt-3 mx-auto w-40 h-40 shadow-xl"  src="selfie.jpg" alt="logo"></img>
        <h1 className="mt-3">Здравствуйте! <br></br> Mеня зовут <strong>Сергей Казанин</strong>.</h1>
        <p className="mt-3">Занимаюсь веб разработкой. В качестве хобби разрабатывыаю проекты на Arduino. </p>
    </div>
  );
}
