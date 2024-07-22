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
      <div className="boardColumns flex flex-col sm:flex-row sm:gap-4">
        {columns.map((currentColumn, index) => {
          return (
            <div key={currentColumn.id}>
              <div className="my-5 flex items-center gap-2 sm:mr-2 sm:w-72">
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
      </div>
    </>
  );
};
