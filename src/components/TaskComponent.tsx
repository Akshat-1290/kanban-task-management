import { Link, useLoaderData } from "react-router-dom";
import type { SubTasks, Tasks } from "../lib/types";

type TasksProps = {
  task: Tasks;
};
export const TaskComponent = ({ task }: TasksProps) => {
  const boardId = useLoaderData();

  const calculateSubtasks = (subtasks: SubTasks[]) => {
    const total = subtasks.length;
    const completed = subtasks.filter((subtask) => subtask.isCompleted).length;
    return `${completed} of ${total} `;
  };

  return (
    <>
      <Link to={`/boards/${boardId}/task/${task.id}`} className="taskcomponent sm:w-72">
        <div className="bg-white w-fit-content px-3 py-5 shadow-lg rounded-md space-y-1">
          <p className="font-bold text-base">{task.title}</p>
          <p className="text-xs text-neutral-500 font-semibold">
            {calculateSubtasks(task.subtasks)}subtasks
          </p>
        </div>
      </Link>
    </>
  );
};
