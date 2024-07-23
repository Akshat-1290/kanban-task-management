import { useEffect, useRef, type RefObject } from "react";
import { Link } from "react-router-dom";

export const MoreModal = ({
  modalType,
  setIsMoreModalOpen,
  boardId,
  columnId,
  taskId,
  moreButtonRef,
}: {
  modalType: "Board" | "Task";
  setIsMoreModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: string;
  columnId?: string;
  taskId?: string;
  moreButtonRef: RefObject<HTMLImageElement>;
}) => {
  const moreRef: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    moreRef.current?.focus();
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreRef.current &&
        !moreRef.current.contains(event.target as Node) &&
        event.target !== moreButtonRef.current
      ) {
        console.log(event.target);
        setIsMoreModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMoreModalOpen, moreButtonRef]);

  return (
    <>
      <div
        className="more absolute -right-2 top-9 w-48 border bg-white p-4 shadow-md"
        tabIndex={1}
        ref={moreRef}
      >
        <ul className="space-y-3">
          <li>
            <Link
              tabIndex={1}
              to={`/boards/${boardId}${modalType === "Task" ? `/column/${columnId}/tasks/${taskId}` : ""}/edit`}
              className="text-base text-neutral-400"
              onClick={() => {
                setIsMoreModalOpen(false);
              }}
            >
              Edit {modalType}
            </Link>
          </li>
          <li>
            <Link
              tabIndex={1}
              to={`/boards/${boardId}${modalType === "Task" ? `/column/${columnId}/tasks/${taskId}` : ""}/delete`}
              className="text-base text-red-400"
              onClick={() => {
                setIsMoreModalOpen(false);
              }}
            >
              Delete {modalType}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
