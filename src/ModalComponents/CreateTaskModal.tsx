import { useContext, useEffect, useMemo } from "react";
import { TaskModal } from "../modals/TaskModal";
import { BoardContext } from "../context/BoardContext";
import {
  useActionData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import type { Tasks } from "../lib/types";

const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const newTaskId = crypto.randomUUID();

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

  const newTask = {
    id: newTaskId,
    title: data.title,
    description: data.description,
    subtasks,
  };
  return { newTask: newTask, columnName: data.column };
};

export const CreateTaskModal = () => {
  const boardId = useRouteLoaderData("board") as string;
  const {
    state: { boards },
    dispatch,
  } = useContext(BoardContext);
  const activeBoard = useMemo(
    () => boards.find((board) => board.id === boardId),
    [boards, boardId],
  );
  const actionData = useActionData() as { newTask: Tasks; columnName: string };
  const navigate = useNavigate();
  useEffect(() => {
    if (actionData) {
      const newColumnId = activeBoard?.columns.find(
        (c) => c.name === actionData.columnName,
      )?.id;
      if (newColumnId) {
        dispatch({
          type: "ADD_TASK",
          payload: { boardId, columnId: newColumnId, task: actionData.newTask },
        });
        navigate(`/boards/${activeBoard?.id}`);
      }
    }
  }, [actionData, activeBoard, dispatch, boardId, navigate]);

  return activeBoard && <TaskModal board={activeBoard} />;
};

CreateTaskModal.action = action;
