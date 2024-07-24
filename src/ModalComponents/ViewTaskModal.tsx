import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ModalBase } from "./ModalBase";
import { BoardContext } from "../context/BoardContext";
import { useNavigate, useRouteLoaderData, type Params } from "react-router-dom";
import { MoreModal } from "../components/MoreModal";
import type { SubTasks } from "../lib/types";
import { ColumnList } from "./ColumnList";

type LoaderData = {
  boardId: string;
  columnId: string;
  taskId: string;
};

const loader = async ({ params }: { params: Params }) => {
  return params;
};

export const ViewTaskModal = () => {
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const moreButtonRef = useRef<HTMLImageElement>(null);
  const {
    state: { boards },
    dispatch,
  } = useContext(BoardContext);
  const { boardId, columnId, taskId } = useRouteLoaderData(
    "task",
  ) as LoaderData;
  const activeBoard = useMemo(
    () => boards.find((board) => board.id === boardId),
    [boards, boardId],
  );
  const activeColumn = activeBoard?.columns.find(
    (column) => column.id === columnId,
  );
  const columnNameList = activeBoard?.columns.map((column) => column.name);

  const activeTask = activeColumn?.tasks.find((t) => t.id === taskId);
  const [selectedColumn, setSelectedColumn] = useState<string>(
    activeColumn?.name ?? "",
  );

  const navigate = useNavigate();

  const calculateSubtasks = (subtasks: SubTasks[]) => {
    const total = subtasks.length;
    const completed = subtasks.filter((subtask) => subtask.isCompleted).length;
    return `${completed} of ${total}`;
  };

  useEffect(() => {
    if (selectedColumn !== activeColumn?.name && activeTask) {
      const newColumnId = activeBoard?.columns.find(
        (column) => column.name === selectedColumn,
      )?.id;
      if (newColumnId) {
        dispatch({
          type: "REMOVE_TASK",
          payload: { boardId, columnId, taskId },
        });
        dispatch({
          type: "ADD_TASK",
          payload: { boardId, columnId: newColumnId, task: activeTask },
        });
        setTimeout(() => {
          navigate(
            `/boards/${boardId}/column/${newColumnId}/tasks/${taskId}/view`,
          );
        }, 200);
      }
    }
  }, [
    selectedColumn,
    dispatch,
    boardId,
    columnId,
    taskId,
    activeColumn?.name,
    activeTask,
    activeBoard?.columns,
    navigate,
  ]);

  return (
    <>
      <ModalBase>
        {activeTask ? (
          <div>
            <div className="task-header relative flex justify-between">
              <p className="text-lg font-bold dark:text-white">
                {activeTask?.title}
              </p>
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
                  modalType="Task"
                  setIsMoreModalOpen={setIsMoreModalOpen}
                  boardId={boardId}
                  columnId={columnId}
                  taskId={taskId}
                  moreButtonRef={moreButtonRef}
                />
              )}
            </div>
            <p className="desc mt-2 text-sm font-normal text-neutral-500 dark:text-neutral-400">
              {activeTask?.description}
            </p>
            <div className="task-body mt-4">
              <p className="text-xs font-semibold text-neutral-500 dark:text-white">
                Subtasks ({" "}
                {activeTask?.subtasks &&
                  calculateSubtasks(activeTask?.subtasks)}
                )
              </p>
              <ul className="mt-4 space-y-3">
                {activeTask?.subtasks.map((subtask) => {
                  return (
                    <li key={subtask.id}>
                      <label className="flex h-10 cursor-pointer items-center gap-4 rounded-md bg-blue-50 px-3 hover:bg-purple-100 dark:bg-neutral-800 hover:dark:bg-neutral-900">
                        <input
                          type="checkbox"
                          className="accent-purple-500"
                          name="subtaskCompletion"
                          id={`SubtaskCompletion-${subtask.id}`}
                          checked={subtask.isCompleted}
                          onChange={() => {
                            dispatch({
                              type: "TOGGLE_SUBTASK_COMPLETION",
                              payload: {
                                boardId: boardId,
                                columnId: columnId,
                                taskId: taskId,
                                subtaskId: subtask.id,
                              },
                            });
                          }}
                        />
                        <p
                          className={`text-sm font-semibold dark:text-neutral-400 ${subtask.isCompleted ? "text-neutral-900 text-opacity-50 line-through" : ""}`}
                        >
                          {subtask.title}
                        </p>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <ColumnList
              selectedColumn={selectedColumn}
              setSelectedColumn={setSelectedColumn}
              columnNameList={columnNameList ?? []}
            />
          </div>
        ) : (
          <img src="/loader.svg" alt="Loader" className="m-auto h-14"></img>
        )}
      </ModalBase>
    </>
  );
};

ViewTaskModal.loader = loader;
