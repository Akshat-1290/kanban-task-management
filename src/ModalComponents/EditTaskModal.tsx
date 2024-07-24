import {
  useActionData,
  useNavigate,
  useRouteLoaderData,
  type ActionFunctionArgs,
} from "react-router-dom";
import { TaskModal } from "../modals/TaskModal";
import { useContext, useEffect, useMemo } from "react";
import { BoardContext } from "../context/BoardContext";
import type { Tasks } from "../lib/types";

const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const subtasks = Object.entries(data)
    .filter(([key]) => key.startsWith("subtask:"))
    .map(([key, value]) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, id] = key.split(":");

      return {
        id: id || "",
        title: value.toString(),
        isCompleted: false,
      };
    });

  const editedTask = {
    title: data.title as string,
    description: data.description,
    id: params.taskId,
    subtasks,
  };

  return { editedTask, columnName: data.column };
};

export const EditTaskModal = () => {
  const { boardId, columnId, taskId } = useRouteLoaderData("task") as {
    boardId: string;
    columnId: string;
    taskId: string;
  };
  const {
    state: { boards },
    dispatch,
  } = useContext(BoardContext);
  const activeBoard = useMemo(
    () => boards.find((board) => board.id === boardId),
    [boards, boardId],
  );
  const activeTask = activeBoard?.columns
    .find((column) => column.id === columnId)
    ?.tasks.find((task) => task.id === taskId);
  const actionData = useActionData() as {
    editedTask: Tasks;
    columnName: string;
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (actionData) {
      const prevColumnId = activeBoard?.columns.find((column) =>
        column.tasks.some((task) => task.id === taskId),
      )?.id;

      const newColumnId = activeBoard?.columns.find(
        (c) => c.name === actionData.columnName,
      )?.id;
      if (newColumnId && prevColumnId) {
        if (prevColumnId !== newColumnId) {
          console.log("JJ");

          dispatch({
            type: "REMOVE_TASK",
            payload: {
              boardId,
              columnId: prevColumnId,
              taskId: taskId,
            },
          });
          dispatch({
            type: "ADD_TASK",
            payload: {
              boardId,
              columnId: newColumnId,
              task: actionData.editedTask,
            },
          });
        } else {
          dispatch({
            type: "UPDATE_TASK",
            payload: {
              boardId,
              columnId: newColumnId,
              task: actionData.editedTask,
            },
          });
        }

        navigate(`/boards/${activeBoard?.id}`);
      }
    }
  }, [actionData, activeBoard, dispatch, boardId, navigate, taskId]);

  return (
    activeBoard && (
      <TaskModal board={activeBoard} task={activeTask} colId={columnId} />
    )
  );
};

EditTaskModal.action = action;
