import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="w-full h-screen text-center flex flex-col justify-center items-center gap-3"
      id="error-page"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        className="border-2 rounded-md py-1 px-4 text-lg w-min whitespace-nowrap"
        to="/"
      >
        На главную
      </Link>
    </div>
  );
}
