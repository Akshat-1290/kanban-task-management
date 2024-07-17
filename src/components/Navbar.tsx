import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";

export const Navbar = () => {
  const {dispatch} = useContext(SettingsContext)

  const toggleMobileSidebar = () => {
    dispatch({type : "TOGGLE_MOBILE_SIDEBAR"})
  }

  return (
    <>
      <section id="navbar" className="p-4 bg-white sm:p-0 sm:border-b sm:border-200 relative z-20">
        <nav className="flex items-center">
          <div className="logo">
            <Link to={"/"}>
              <img src="/logo-mobile.svg" alt="Mobile Logo" className="sm:hidden" />
              <img src="/logo-dark.svg" alt="Mobile Logo" className="hidden sm:block border-r border-blue-200 p-5 " />
            </Link>
          </div>
          <div className="flex grow ml-5 sm:p-5 sm:ml-0">
            <div className="flex items-center gap-1 relative">
              <p className="font-bold text-xl">Platform Launch</p>
              <button type="button" className="before:absolute before:inset-0 sm:hidden" onClick={()=>{toggleMobileSidebar()}}>
                <img src="/icon-chevron-down.svg" alt="down arrow" />
              </button>
            </div>
            <div className="ml-auto flex gap-5">
              <Link
                to={""}
                className="w-12 sm:w-40 sm:text-white h-8 sm:h-10 rounded-full bg-purple-600 flex justify-center items-center sm:gap-2 sm:font-bold"
              >
                <img
                  src="/icon-add-task-mobile.svg"
                  alt="Add Task"
                />
                <span className="hidden sm:inline">Add New Task</span>
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
