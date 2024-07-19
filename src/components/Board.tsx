import { useParams } from "react-router-dom";
import { WelcomeBoard } from "./WelcomeBoard";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../context/SettingsContext";
import localforage from "localforage";
import { BoardContext } from "../context/BoardContext";

export const Board = () => {
  const { boardId } = useParams();
  const {
    state: { isSidebarOpen },
  } = useContext(SettingsContext);
  const {
    state: { boards },
  } = useContext(BoardContext);
  const firstBoardId = boards[0]?.id;
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
        className={`h-calc-100vh-minus-5rem overflow-auto ${
          isSidebarOpen ? "sm:ml-64" : "sm:ml-0"
        }`}
      >
        <div className="mx-4 my-5">
          {boardId ? "" : <WelcomeBoard firstBoardId={firstBoardId!} />}
        </div>
      </section>
    </>
  );
};
