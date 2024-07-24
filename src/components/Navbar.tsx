import { useContext, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";
import { BoardContext } from "../context/BoardContext";
import { MoreModal } from "./MoreModal";

export const Navbar = () => {
  const {
    state: { boards },
  } = useContext(BoardContext);
  const boardId = useParams().boardId;
  const activeBoard = useMemo(() => {
    return boards.find((board) => board.id === boardId);
  }, [boards, boardId]);
  const {
    state: { isSidebarOpen, isMobileSidebarOpen, darkMode },
    dispatch: settingsDispatch,
  } = useContext(SettingsContext);

  const toggleMobileSidebar = () => {
    settingsDispatch({ type: "SET_MOBILE_SIDEBAR", payload: null });
  };
  const moreButtonRef = useRef<HTMLImageElement>(null);

  const [isMoreModalOpen, setIsMoreModalOpen] = useState<boolean>(false);

  return (
    <>
      <section
        id="navbar"
        className="relative z-20 bg-white p-4 sm:border-b sm:border-blue-200 sm:p-0 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white"
      >
        <nav className="flex items-center">
          <div className="logo sm:flex sm:h-20 sm:items-center sm:border-r-2 sm:border-blue-200 dark:border-neutral-600">
            <Link to={"/"}>
              <img
                src="/logo-mobile.svg"
                alt="Mobile Logo"
                className="sm:hidden"
              />
              {darkMode ? (
                <img
                  src="/logo-light.svg"
                  alt="Mobile Logo"
                  className={`hidden p-5 sm:block ${
                    isSidebarOpen ? "sm:pr-[5.15rem]" : "sm:pr-[1.15rem]"
                  } `}
                />
              ) : (
                <img
                  src="/logo-dark.svg"
                  alt="Mobile Logo"
                  className={`hidden p-5 sm:block ${
                    isSidebarOpen ? "sm:pr-[5.15rem]" : "sm:pr-[1.15rem]"
                  } `}
                />
              )}
            </Link>
          </div>
          <div className="ml-5 flex grow sm:ml-0 sm:p-5">
            <div className="relative flex items-center gap-1">
              <p className="text-xl font-bold">
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
            {boardId && (
              <div className="relative ml-auto flex gap-4">
                <Link
                  to={`/boards/${boardId}/newTask`}
                  className="flex h-8 w-12 items-center justify-center rounded-full bg-purple-600 sm:h-10 sm:w-40 sm:gap-2 sm:font-bold sm:text-white"
                >
                  <img src="/icon-add-task-mobile.svg" alt="Add Task" />
                  <span className="hidden sm:inline">Add New Task</span>
                </Link>
                <button
                  type="button"
                  className="flex w-6 items-center justify-center"
                  onClick={() => setIsMoreModalOpen(!isMoreModalOpen)}
                >
                  <img
                    className="h-6"
                    src="/icon-vertical-ellipsis.svg"
                    alt="More"
                    ref={moreButtonRef}
                  />
                </button>
                {isMoreModalOpen && (
                  <MoreModal
                    modalType="Board"
                    setIsMoreModalOpen={setIsMoreModalOpen}
                    boardId={boardId}
                    moreButtonRef={moreButtonRef}
                  />
                )}
              </div>
            )}
          </div>
        </nav>
      </section>
    </>
  );
};
