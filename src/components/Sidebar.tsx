import { Link, useParams } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useContext, useEffect, useRef, useCallback } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { useMediaQuery } from "../lib/hooks/useMediaQuery";
import { BoardContext } from "../context/BoardContext";
import { BoardLink } from "./BoardLink";

export const Sidebar = () => {
  const { state: settingsState, dispatch: settingsDispatch } =
    useContext(SettingsContext);
  const {
    state: { boards },
  } = useContext(BoardContext);
  const { isMobileSidebarOpen, isSidebarOpen } = settingsState;
  const sidebarRef = useRef<HTMLElement | null>(null);
  const sidebarContentRef = useRef<HTMLDivElement | null>(null);
  const isSmallDevice = useMediaQuery("(max-width: 639px)");
  const boardsMeta = boards.map((board) => ({
    id: board.id,
    name: board.name,
  }));
  const boardId = useParams().boardId;

  const updateSidebarState = useCallback(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      if (isSmallDevice) {
        sidebar.classList.remove("hideSidebar");
        isMobileSidebarOpen
          ? sidebar.classList.add("activeMobileSidebar")
          : sidebar.classList.remove("activeMobileSidebar");
      } else {
        sidebar.classList.remove("activeMobileSidebar");
        isSidebarOpen
          ? sidebar.classList.add("showSidebar")
          : sidebar.classList.remove("showSidebar");
      }
    }
  }, [isSmallDevice, isMobileSidebarOpen, isSidebarOpen]);

  useEffect(() => {
    updateSidebarState();
  }, [updateSidebarState]);

  useEffect(() => {
    setTimeout(() => {
      sidebarRef.current?.classList.add("!flex");
    }, 1);
  }, []);

  return (
    <>
      <section
        id="sidebar"
        className="invisible fixed -top-full z-10 hidden h-screen w-full justify-center bg-transparent transition-all duration-200 sm:absolute sm:-left-full sm:top-20 sm:h-calc-100vh-minus-5rem sm:w-fit"
        ref={sidebarRef}
      >
        <div
          className={`${
            isMobileSidebarOpen ? "block" : "hidden"
          } sidebar-bg fixed top-16 -z-10 h-full w-full bg-black bg-opacity-20 sm:hidden`}
          onClick={() => {
            settingsDispatch({ type: "SET_MOBILE_SIDEBAR", payload: false });
          }}
        ></div>
        <div
          className="mt-7 flex h-fit w-64 flex-col rounded-md border border-blue-200 bg-white pb-4 sm:relative sm:mt-0 sm:h-full sm:overflow-auto sm:rounded-none"
          tabIndex={1}
          ref={sidebarContentRef}
        >
          <p className="my-3 text-center text-sm font-bold uppercase tracking-widest text-neutral-500">
            All Boards ({boards.length})
          </p>
          <ul className="mt-2 flex flex-col">
            {boardsMeta.map(({ name, id }) => {
              return (
                <BoardLink
                  key={id}
                  boardName={name}
                  boardId={id}
                  isSmallDevice={isSmallDevice}
                />
              );
            })}
            <li className="mr-4">
              <Link
                to={`/boards/${boardId}/new`}
                className="flex h-12 items-center gap-4 rounded-br-full rounded-tr-full pl-5 font-medium text-purple-500 hover:bg-purple-100"
                onClick={() =>
                  settingsDispatch({
                    type: "SET_MOBILE_SIDEBAR",
                    payload: false,
                  })
                }
              >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>+ Create New Board</p>
              </Link>
            </li>
            <li className="mr-4">
              <Link
                to={"/boards"}
                className="flex h-12 items-center gap-4 rounded-br-full rounded-tr-full pl-5 font-medium text-purple-500 hover:bg-purple-100"
                onClick={() =>
                  settingsDispatch({
                    type: "SET_MOBILE_SIDEBAR",
                    payload: false,
                  })
                }
              >
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p>Close Boards</p>
              </Link>
            </li>
          </ul>

          <ThemeSwitcher />
          <button
            type="button"
            className="bottom-7 mt-5 hidden h-12 w-[94%] items-center gap-3 rounded-br-full rounded-tr-full pl-5 font-bold text-neutral-400 hover:bg-purple-100 hover:text-purple-500 sm:flex"
            onClick={() =>
              settingsDispatch({ type: "SET_SIDEBAR", payload: false })
            }
          >
            <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
                fill="currentColor"
              ></path>
            </svg>
            Hide Sidebar
          </button>
        </div>
      </section>
      <button
        type="button"
        className="absolute bottom-7 hidden h-12 w-16 items-center justify-center rounded-br-full rounded-tr-full bg-purple-500 hover:bg-purple-400 sm:flex"
        onClick={() => settingsDispatch({ type: "SET_SIDEBAR", payload: true })}
      >
        <img src="/icon-show-sidebar.svg" alt="Show Sidebar" className="h-3" />
      </button>
    </>
  );
};
