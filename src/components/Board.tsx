import { Outlet, useParams } from "react-router-dom";
import { WelcomeBoard } from "./WelcomeBoard";
import { useContext, useEffect, useMemo } from "react";
import { SettingsContext } from "../context/SettingsContext";
import localforage from "localforage";
import { BoardContext } from "../context/BoardContext";
import { BoardColumns } from "./BoardColumns";
import { EmptyBoard } from "./EmptyBoard";

export const Board = () => {
  const { boardId } = useParams();
  const {
    state: { isSidebarOpen },
  } = useContext(SettingsContext);
  const {
    state: { boards },
  } = useContext(BoardContext);
  const firstBoardId = boards[0]?.id;
  const activeBoard = useMemo(() => {
    return boards.find((board) => board.id === boardId);
  }, [boards, boardId]);
  useEffect(() => {
    const updateLastActiveBoard = async () => {
      const storedBoardId = await localforage.getItem("lastActiveBoardId");
      if (storedBoardId !== boardId || !storedBoardId) {
        if (boardId) {
          await localforage.setItem("lastActiveBoardId", boardId);
        } else {
          await localforage.setItem("lastActiveBoardId", firstBoardId);
        }
      }
    };
    updateLastActiveBoard();
  }, [boardId, firstBoardId]);

  return (
    <>
      <section
        id="boards"
        className={`h-calc-100vh-minus-6rem overflow-scroll bg-blue-50 sm:h-calc-100vh-minus-5rem ${
          isSidebarOpen ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        <div className="mx-4 pb-10">
          {boardId ? (
            activeBoard && activeBoard?.columns.length > 0 ? (
              <BoardColumns columns={activeBoard.columns} />
            ) : (
              <EmptyBoard boardId={boardId} />
            )
          ) : (
            firstBoardId && <WelcomeBoard firstBoardId={firstBoardId} />
          )}
        </div>
      </section>
      <Outlet />
    </>
  );
};
