import boards from "../lib/data";
import { type BoardAction, type BoardState } from "../lib/types";

export const initialState : BoardState = {
 boards : boards
};


export const reducer = (state : BoardState , action : BoardAction)=> {
    let newState;
    switch (action.type) {
        case 'SET_INITIAL_STATE':
          newState = action.payload;
          break;

        case 'ADD_BOARD':
          newState = {
            ...state,
            boards: [...state.boards, action.payload]
          };
          break;

        case 'REMOVE_BOARD':
          newState = {
            ...state,
            boards: state.boards.filter(board => board.id !== action.payload)
          };
          break;

        case 'UPDATE_BOARD':
          newState = {
            ...state,
            boards: state.boards.map(board =>
              board.id === action.payload.id ? action.payload : board
            )
          };
          break;

        case 'ADD_TASK':
          newState = {
            ...state,
            boards: state.boards.map(board =>
              board.id === action.payload.boardId
                ? {
                    ...board,
                    columns: board.columns.map(column =>
                      column.id === action.payload.columnId
                        ? {
                            ...column,
                            tasks: [...column.tasks, action.payload.task]
                          }
                        : column
                    )
                  }
                : board
            )
          };
          break;

        case 'REMOVE_TASK':
          newState = {
            ...state,
            boards: state.boards.map(board =>
              board.id === action.payload.boardId
                ? {
                    ...board,
                    columns: board.columns.map(column =>
                      column.id === action.payload.columnId
                        ? {
                            ...column,
                            tasks: column.tasks.filter(task => task.id !== action.payload.taskId)
                          }
                        : column
                    )
                  }
                : board
            )
          };
          break;

        default:
          return newState;
        }
};
