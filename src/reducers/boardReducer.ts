import type {  BoardAction ,  BoardState } from "../lib/types";

export const initialState : BoardState = {
 boards : []
};


export const reducer = (state : BoardState , action : BoardAction) :BoardState => {
    let newState;
    switch (action.type) {
        case 'SET_INITIAL_STATE':
          newState = action.payload;
          return newState
        case 'ADD_BOARD':
          newState = {
            ...state,
            boards: [...state.boards, action.payload]
          };
          return newState

        case 'REMOVE_BOARD':
          newState = {
            ...state,
            boards: state.boards.filter(board => board.id !== action.payload)
          };
          return newState

        case 'UPDATE_BOARD':
          newState = {
            ...state,
            boards: state.boards.map(board =>
              board.id === action.payload.id ? action.payload : board
            )
          };
          return newState

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
          return newState

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
          return newState
        default:
          return state;
        }
};
