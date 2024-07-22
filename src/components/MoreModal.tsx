import { useEffect, useRef, type RefObject } from "react";
import { Link } from "react-router-dom";

export const MoreModal = ({
  setIsMoreModalOpen,
  boardId,
}: {
  setIsMoreModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardId: string;
}) => {
  const moreRef: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    moreRef.current?.focus();
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setIsMoreModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsMoreModalOpen]);

  return (
    <>
      <div
        className="more absolute right-2 top-16 w-48 border bg-white p-4 shadow-md"
        tabIndex={1}
        ref={moreRef}
      >
        <ul className="space-y-3">
          <li>
            <Link
              tabIndex={1}
              to={`/boards/${boardId}/edit`}
              className="text-base text-neutral-400" onClick={() =>{setIsMoreModalOpen(false)}}
            >
              Edit Board
            </Link>
          </li>
          <li>
            <Link tabIndex={1} to={`/boards/${boardId}/delete`} className="text-base text-red-400" onClick={() =>{setIsMoreModalOpen(false)}}>
              Delete Board
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
