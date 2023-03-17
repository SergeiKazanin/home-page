import React from "react";

export default function HomePage() {
  document.title = "Главная - SergeiKazanin Home Page";
  return (
    <div className="py-4 text-center">
      <img className="rounded-full m-auto w-40 h-40 shadow-xl"  src="selfie.jpg" alt="logo"></img>
        <h1 className="">Здравствуйте! <br></br> Mеня зовут <strong>Сергей Казанин</strong>.</h1>
        <p className="mt-3">Я начинающий веб разработчик. </p>
    </div>
  );
}
