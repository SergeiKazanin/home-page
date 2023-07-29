import React, { useEffect, useRef, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

export default function CardProject({ project }) {
  const imgArr = project.poster.asset._ref.split("-");
  const imgLink = imgArr[1] + "-" + imgArr[2] + "." + imgArr[3];
  const img = `https://cdn.sanity.io/images/94p50dfz/production/${imgLink}`;
  const [loadImg, setLoadImg] = useState(false);

  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef?.current?.complete) {
      setLoadImg(true);
    }
    return () => {};
  }, [imgRef?.current?.complete]);

  const handleImgLoad = () => {
    setLoadImg(true);
  };

  return (
    <div className="w-[20rem] flex flex-col overflow-hidden border dark:border-none rounded-2xl shadow-md">
      {loadImg ? (
        <></>
      ) : (
        <Skeleton variant="rounded" width={320} height={250} />
      )}

      <img
        ref={imgRef}
        onLoad={() => handleImgLoad()}
        src={img}
        alt={project.poster.caption}
        className={loadImg ? "" : "hidden"}
      ></img>
      <div className="p-2 flex flex-1 flex-col  items-center dark:bg-slate-600 border-t  dark:border-slate-500">
        <p className="text-left">{project.description}</p>
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
}
