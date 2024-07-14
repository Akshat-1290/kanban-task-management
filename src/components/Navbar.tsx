import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <section id="navbar" className="p-4">
        <nav className="flex items-center">
          <div className="logo">
            <Link to={"/"}>
              <img src="/logo-mobile.svg" alt="Mobile Logo" />
            </Link>
          </div>
          <div className="flex grow ml-5">
            <div className="flex items-center gap-1">
              <p className="font-bold text-lg ">Platform Launch</p>
              <button type="button">
                <img src="/icon-chevron-down.svg" alt="down arrow" />
              </button>
            </div>
            <div className="ml-auto flex gap-5">
              <Link
                to={""}
                className="w-12 h-8 rounded-full bg-purple-600 flex justify-center items-center"
              >
                <img
                  src="/icon-add-task-mobile.svg"
                  alt="Add Task"
                  className=""
                />
              </Link>
              <button type="button">
                <img src="/icon-vertical-ellipsis.svg" alt="" />
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
