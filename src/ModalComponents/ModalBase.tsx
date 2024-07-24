import type { ReactNode } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

export const ModalBase = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const boardId = useRouteLoaderData("board");

  return (
    <section className="modal-base fixed top-0 z-30 flex h-screen w-screen items-center justify-center">
      <div
        className="modal-bg absolute -z-10 h-full w-full bg-black bg-opacity-20"
        onClick={() => navigate(`/boards/${boardId}`)}
      ></div>
      <div className="modal h-fit max-h-[90vh] w-[90vw] overflow-auto rounded-lg bg-white px-5 py-8 shadow-lg sm:w-[33rem] sm:px-8 dark:bg-neutral-700">
        {children}
      </div>
    </section>
  );
};
