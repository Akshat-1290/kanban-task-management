import { createContext, useReducer, type FC, type ReactNode } from "react";
import { initialState , reducer } from "../reducers/boardReducer";
import type { BoardAction, BoardState } from "../lib/types";

const BoardContext = createContext<{
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface BoardProviderProps {
  children : ReactNode
}

const BoardProvider : FC<BoardProviderProps> = ({children}) => {
  const [state , dispatch] = useReducer(reducer , initialState);

  return (
      <BoardContext.Provider value={{state , dispatch}}>
          {children}
      </BoardContext.Provider>
  )
}


export {BoardContext , BoardProvider}