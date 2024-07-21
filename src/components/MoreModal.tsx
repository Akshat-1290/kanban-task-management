import { useEffect, useRef, type RefObject } from "react";
import { Link } from "react-router-dom";

export const MoreModal = ({
  setIsMoreModalOpen,
  boardId
}: {
  setIsMoreModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardId : string
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
        className="more absolute bg-white w-48 top-16 right-2 p-4 shadow-md border"
        tabIndex={1}
        ref={moreRef}
      >
        <ul className="space-y-3">
          <li>
            <Link
              tabIndex={1}
              to={`/boards/${boardId}/edit`}
              className="text-neutral-400 text-base"
            >
              Edit Board
            </Link>
          </li>
          <li>
            <Link
              tabIndex={1}
              to={""}
              className="text-red-400 text-base "
            >
              Delete Board
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
