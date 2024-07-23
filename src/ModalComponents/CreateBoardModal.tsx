import { useContext, useEffect } from "react";
import { BoardModal } from "../modals/BoardModal";
import { BoardContext } from "../context/BoardContext";
import type { Board } from "../lib/types";
import { useActionData, useNavigate } from "react-router-dom";

const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const newBoardId = crypto.randomUUID();

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

  const newBoard = { id: newBoardId, name: data.name as string, columns };
  return newBoard;
};

export const CreateBoardModal = () => {
  const { dispatch } = useContext(BoardContext);
  const newBoard = useActionData() as Board | undefined;
  const navigate = useNavigate();
  useEffect(() => {
    if (newBoard) {
      dispatch({ type: "ADD_BOARD", payload: newBoard });
      navigate(`/boards/${newBoard.id}`);
    }
  }, [newBoard, dispatch, navigate]);

  return <BoardModal />;
};

CreateBoardModal.action = action;
