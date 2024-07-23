import {
  type FC,
  type ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { BoardContext } from "../context/BoardContext";
import localforage from "localforage";
import type { Board } from "../lib/types";
import { reducer, initialState } from "../reducers/boardReducer";
import defaultBoards from "../lib/data";

interface BoardProviderProps {
  children: ReactNode;
}

export const BoardProvider: FC<BoardProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeBoards = async () => {
      const storedBoards: Board[] | null = await localforage.getItem("boards");
      if (!storedBoards) {
        dispatch({
          type: "SET_INITIAL_STATE",
          payload: { boards: defaultBoards },
        });
      } else {
        dispatch({
          type: "SET_INITIAL_STATE",
          payload: { boards: storedBoards },
        });
      }
      setIsInitialized(true);
    };

    initializeBoards();
  }, [dispatch]);

  useEffect(() => {
    state.boards.length > 0 && localforage.setItem("boards", state.boards);
  }, [state]);

  if (!isInitialized) {
    return null;
  }

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};
