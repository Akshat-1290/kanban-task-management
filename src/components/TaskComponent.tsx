import { Link, useLoaderData } from "react-router-dom";
import type { SubTasks, Tasks } from "../lib/types";

type TasksProps = {
  task: Tasks;
  columnId: string;
};
export const TaskComponent = ({ task, columnId }: TasksProps) => {
  const boardId = useLoaderData();

  const calculateSubtasks = (subtasks: SubTasks[]) => {
    const total = subtasks.length;
    const completed = subtasks.filter((subtask) => subtask.isCompleted).length;
    return `${completed} of ${total} `;
  };

  return (
    <>
      <Link
        to={`/boards/${boardId}/column/${columnId}/tasks/${task.id}/view`}
        className="taskcomponent sm:w-72"
      >
        <div className="w-fit-content space-y-1 rounded-md bg-white px-3 py-5 shadow-lg hover:text-purple-500 dark:bg-neutral-700 dark:text-white">
          <p className="text-base font-bold">{task.title}</p>
          <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
            {calculateSubtasks(task.subtasks)}subtasks
          </p>
        </div>
      </Link>
    </>
  );
};
