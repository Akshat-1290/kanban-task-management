import { Link } from "react-router-dom";

export const EmptyBoard = ({ boardId }: { boardId: string }) => {
  return (
    <div className="mt-60 flex flex-col items-center gap-8">
      <p className="text-center text-lg font-bold text-neutral-500 dark:text-neutral-400">
        The Board is empty. Create a new column to get started.
      </p>
      <Link
        to={`/boards/${boardId}/newColumn`}
        className="flex h-14 w-56 items-center justify-center rounded-full bg-purple-500 font-bold text-white"
      >
        + Add New Column
      </Link>
    </div>
  );
};
