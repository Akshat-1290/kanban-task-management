import { Link, useRouteLoaderData } from "react-router-dom";
import type { Column } from "../lib/types";
import { TaskComponent } from "./TaskComponent";

type ColumnProps = {
  columns: Column[];
};
export const BoardColumns = ({ columns }: ColumnProps) => {
  const colors = [
    "bg-blue-400",
    "bg-purple-400",
    "bg-green-400",
    "bg-red-400",
    "bg-yellow-400",
  ];

  const boardId = useRouteLoaderData("board") as string;

  return (
    <>
      <div className="boardColumns flex w-fit flex-col sm:flex-row sm:gap-6">
        {columns.map((currentColumn, index) => {
          return (
            <div key={currentColumn.id}>
              <div className="my-5 flex items-center gap-2 sm:w-72">
                <div
                  className={`dot ${colors[index % colors.length]} h-4 w-4 rounded-full`}
                ></div>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {currentColumn.name} ({currentColumn.tasks.length})
                </p>
              </div>
              <div className="tasks flex flex-col gap-5">
                {currentColumn.tasks.map((currentTask) => {
                  return (
                    <TaskComponent
                      key={currentTask.id}
                      task={currentTask}
                      columnId={currentColumn.id}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <Link
          to={`/boards/${boardId}/newColumn`}
          className="newColumn ml-2 mt-4 flex h-48 w-[90vw] cursor-pointer items-center justify-center rounded-md bg-purple-500 bg-opacity-5 text-2xl font-bold text-purple-400 sm:ml-0 sm:mr-3 sm:mt-16 sm:h-calc-100vh-plus-4rem sm:w-[16rem] dark:bg-neutral-700 dark:text-neutral-400"
        >
          {" "}
          + New Column
        </Link>
      </div>
    </>
  );
};
