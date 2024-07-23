import { Link } from "react-router-dom";
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

  return (
    <>
      <div className="boardColumns flex flex-col sm:flex-row sm:gap-6 w-fit">
        {columns.map((currentColumn, index) => {
          return (
            <div key={currentColumn.id}>
              <div className="my-5 flex items-center gap-2 sm:w-72">
                <div
                  className={`dot ${colors[index % colors.length]} h-4 w-4 rounded-full`}
                ></div>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {currentColumn.name} ({currentColumn.tasks.length})
                </p>
              </div>
              <div className="tasks flex flex-col gap-5">
                {currentColumn.tasks.map((currentTask) => {
                  return (
                    <TaskComponent key={currentTask.id} task={currentTask} />
                  );
                })}
              </div>
            </div>
          );
        })}
        <Link to={`/boards/${columns[0]?.boardId}/newColumn`} className="newColumn w-[90vw] mt-4 ml-2 sm:ml-0 sm:mt-16 flex h-48 sm:h-calc-100vh-plus-4rem sm:w-[16rem] cursor-pointer items-center justify-center rounded-md bg-purple-500 bg-opacity-5 text-2xl font-bold text-purple-400 sm:mr-3">
          {" "}
          + New Column
        </Link>
      </div>
    </>
  );
};
