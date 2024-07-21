import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const ModalBase = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <section className="modal-base fixed top-0 h-screen w-screen flex justify-center items-center z-30">
      <div
        className="modal-bg absolute bg-black bg-opacity-20 w-full h-full -z-10"
        onClick={() => navigate(-1)}
      ></div>
      <div className="modal bg-white w-[80vw] sm:w-[33rem] px-5 sm:px-8 py-8 shadow-lg rounded-lg">{children}</div>
    </section>
  );
};
