import { createContext} from "react";
import { initialState } from "../reducers/boardReducer";
import type { BoardAction, BoardState } from "../lib/types";


export const BoardContext = createContext<{
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
}>({
  state: initialState,
  dispatch: () => null,
});




