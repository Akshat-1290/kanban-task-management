import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { ModalBase } from "./ModalBase";
import { useContext, useMemo } from "react";
import { BoardContext } from "../context/BoardContext";

export const DeleteTaskModal = () => {
  const {
    state: { boards },
    dispatch,
  } = useContext(BoardContext);
  const { boardId, columnId, taskId } = useRouteLoaderData("task") as {
    boardId: string;
    columnId: string;
    taskId: string;
  };
  const activeBoard = useMemo(
    () => boards.find((board) => board.id === boardId),
    [boards, boardId],
  );
  const activeTask = useMemo(
    () =>
      activeBoard?.columns
        .find((column) => column.id === columnId)
        ?.tasks.find((task) => task.id === taskId),
    [activeBoard, columnId, taskId],
  );
  const navigate = useNavigate();

  return (
    <>
      <ModalBase>
        <div className="space-y-4 px-2">
          <h2 className="text-base font-semibold text-red-500">
            Delete this task?
          </h2>
          <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            Are you sure you want to delete the '{activeTask?.title}' task and
            its subtasks? This action will cannot be reversed.{" "}
          </p>
          <div className="flex justify-center gap-5">
            <button
              type="button"
              tabIndex={1}
              className="h-10 w-1/2 rounded-full bg-red-600 font-bold text-white hover:bg-red-400"
              onClick={() => {
                dispatch({
                  type: "REMOVE_TASK",
                  payload: { boardId, columnId, taskId },
                });
                navigate(`/boards/${boardId}`);
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
    </>
  );
};
