import { useContext, useEffect, useMemo } from "react";
import { BoardModal } from "../modals/BoardModal";
import { BoardContext } from "../context/BoardContext";
import {
  useActionData,
  useNavigate,
  useRouteLoaderData,
  type ActionFunctionArgs,
} from "react-router-dom";
import type { Board } from "../lib/types";

const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const columns = Object.entries(data)
    .filter(([key]) => key.startsWith("column:"))
    .map(([key, value]) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, id] = key.split(":");

      return {
        id: id || "",
        name: value.toString(),
        tasks: [],
      };
    });

  const editedBoard = {
    name: data.name as string,
    id: params.boardId,
    columns,
  };

  return editedBoard;
};

export const EditBoardModal = ({ newColumn }: { newColumn: boolean }) => {
  const {
    state: { boards },
    dispatch,
  } = useContext(BoardContext);
  const boardId = useRouteLoaderData("board") as string;
  const activeBoard = useMemo(
    () => boards.find((board) => board.id === boardId),
    [boards, boardId],
  );
  const editedBoard = useActionData() as Board | undefined;
  const navigate = useNavigate();

  useEffect(() => {
    if (editedBoard) {
      const updatedColumns = editedBoard.columns.map((column, index) => {
        if (
          activeBoard?.columns[index]?.id === column.id &&
          activeBoard.columns[index]
        ) {
          return { ...column, tasks: activeBoard.columns[index].tasks };
        } else {
          return column;
        }
      });

      dispatch({
        type: "UPDATE_BOARD",
        payload: { ...editedBoard, columns: updatedColumns },
      });
      navigate(`/boards/${boardId}`);
    }
  }, [editedBoard, activeBoard, dispatch, boardId, navigate]);

  return <BoardModal board={activeBoard} newColumn={newColumn} />;
};

EditBoardModal.action = action;
