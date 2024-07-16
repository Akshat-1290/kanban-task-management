import { type FC, type ReactNode, useEffect, useReducer } from "react";
import { BoardContext } from "../context/BoardContext";
import localforage from "localforage";
import { type Board } from "../lib/types";
import {reducer , initialState} from "../reducers/boardReducer"
import defaultBoards from "../lib/data"

interface BoardProviderProps {
    children : ReactNode
  }

  export const BoardProvider : FC<BoardProviderProps> = ({children}) => {
    const [state , dispatch] = useReducer(reducer , initialState);

    useEffect(() => {
      const initializeBoards = async () => {
        const storedBoards: Board[] | null = await localforage.getItem("boards");
        if (!storedBoards) {
          dispatch({
            type: "SET_INITIAL_STATE",
            payload: { boards: defaultBoards },
          });
          localforage.setItem("boards", defaultBoards);
        } else {
          storedBoards &&
            dispatch({
              type: "SET_INITIAL_STATE",
              payload: { boards: storedBoards },
            });
        }
      };

      initializeBoards();
    }, [dispatch]);

    return (
        <BoardContext.Provider value={{state , dispatch}}>
            {children}
        </BoardContext.Provider>
    )
  }
