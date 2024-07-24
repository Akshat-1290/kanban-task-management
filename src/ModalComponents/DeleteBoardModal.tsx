import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { ModalBase } from "./ModalBase";
import { useContext, useEffect, useMemo, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import { ErrorDeleteModal } from "./ErrorDeleteModal";

export const DeleteBoardModal = () => {
  const {
    state: { boards },
    dispatch,
  } = useContext(BoardContext);
  const boardId = useRouteLoaderData("board") as string;
  const activeBoard = useMemo(
    () => boards.find((board) => board.id === boardId),
    [boards, boardId],
  );
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorDeleting, setErrorDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting) {
      if (boards.length > 1) {
        dispatch({ type: "REMOVE_BOARD", payload: boardId });
        const updatedBoards = boards.filter((board) => board.id !== boardId);
        navigate(`/boards/${updatedBoards[0]?.id}`);
      } else {
        setErrorDeleting(true);
        setIsDeleting(false);
      }
    }
  }, [boards, isDeleting, navigate, boardId, dispatch]);

  return (
    <>
      {errorDeleting ? (
        activeBoard && (
          <ErrorDeleteModal
            boardName={activeBoard.name}
            onClick={() => {
              navigate(`/boards/${boardId}`);
            }}
          />
        )
      ) : (
        <ModalBase>
          <div className="space-y-3 px-2">
            <h2 className="text-base font-semibold text-red-500">
              Delete this board?
            </h2>
            <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              Are you sure you want to delete the '{activeBoard?.name}' board?
              This action will remove all columns and tasks and cannot be
              reversed.{" "}
            </p>
            <div className="flex justify-center gap-5">
              <button
                type="button"
                tabIndex={1}
                className="h-10 w-1/2 rounded-full bg-red-600 bg-opacity-80 font-bold text-white hover:bg-red-400"
                onClick={() => {
                  setIsDeleting(true);
                }}
              >
                Delete
              </button>
              <button
                type="button"
                tabIndex={1}
                className="h-10 w-1/2 rounded-full bg-blue-200 bg-opacity-80 font-bold hover:bg-blue-400 dark:bg-neutral-600 dark:text-blue-600 hover:dark:bg-neutral-800"
                onClick={() => {
                  navigate(`/boards/${boardId}`);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalBase>
      )}
    </>
  );
};
