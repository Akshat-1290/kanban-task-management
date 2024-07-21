import { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { BoardContext } from "../context/BoardContext";

export const Navbar = () => {
  const { boardId } = useParams();
  const {
    state: { boards },
  } = useContext(BoardContext);
  const activeBoard = useMemo(() => {
    return boards.find((board) => board.id === boardId);
  }, [boards, boardId]);
  const {
    state: { isSidebarOpen, isMobileSidebarOpen },
    dispatch: settingsDispatch,
  } = useContext(SettingsContext);

  const toggleMobileSidebar = () => {
    settingsDispatch({ type: "SET_MOBILE_SIDEBAR", payload: null });
  };


  return (
    <>
      <section
        id="navbar"
        className="p-4 bg-white sm:p-0 sm:border-b sm:border-blue-200 relative z-20"
      >
        <nav className="flex items-center">
          <div className="logo sm:h-20 sm:flex sm:items-center sm:border-r-2 sm:border-blue-200">
            <Link to={"/"}>
              <img
                src="/logo-mobile.svg"
                alt="Mobile Logo"
                className="sm:hidden"
              />
              <img
                src="/logo-dark.svg"
                alt="Mobile Logo"
                className={`hidden sm:block p-5 ${
                  isSidebarOpen ? "sm:pr-[5.15rem]" : "sm:pr-[1.15rem]"
                } `}
              />
            </Link>
          </div>
          <div className="flex grow ml-5 sm:p-5 sm:ml-0">
            <div className="flex items-center gap-1 relative">
              <p className="font-bold text-xl">
                {activeBoard?.name || "Kanban"}
              </p>
              <button
                type="button"
                className="before:absolute before:inset-0 sm:hidden"
                onClick={() => {
                  toggleMobileSidebar();
                }}
              >
                {isMobileSidebarOpen ? (
                  <img src={`/icon-chevron-up.svg`} alt="Up arrow" />
                ) : (
                  <img src={`/icon-chevron-down.svg`} alt="down arrow" />
                )}
              </button>
            </div>
            <div className="ml-auto flex gap-5">
              <Link
                to={""}
                className="w-12 sm:w-40 sm:text-white h-8 sm:h-10 rounded-full bg-purple-600 flex justify-center items-center sm:gap-2 sm:font-bold"
              >
                <img src="/icon-add-task-mobile.svg" alt="Add Task" />
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
