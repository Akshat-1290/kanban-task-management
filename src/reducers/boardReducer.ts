import type { BoardAction, BoardState } from "../lib/types";

export const initialState: BoardState = {
  boards: [],
};

export const reducer = (state: BoardState, action: BoardAction): BoardState => {
  let newState;
  switch (action.type) {
    case "SET_INITIAL_STATE":
      newState = action.payload;
      return newState;
    case "ADD_BOARD":
      newState = {
        ...state,
        boards: [...state.boards, action.payload],
      };
      return newState;

    case "REMOVE_BOARD":
      newState = {
        ...state,
        boards: state.boards.filter((board) => board.id !== action.payload),
      };
      return newState;

    case "UPDATE_BOARD":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.id ? action.payload : board,
        ),
      };
      return newState;

    case "ADD_TASK":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? {
                ...board,
                columns: board.columns.map((column) =>
                  column.id === action.payload.columnId
                    ? {
                        ...column,
                        tasks: [...column.tasks, action.payload.task],
                      }
                    : column,
                ),
              }
            : board,
        ),
      };
      return newState;

    case "REMOVE_TASK":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? {
                ...board,
                columns: board.columns.map((column) =>
                  column.id === action.payload.columnId
                    ? {
                        ...column,
                        tasks: column.tasks.filter(
                          (task) => task.id !== action.payload.taskId,
                        ),
                      }
                    : column,
                ),
              }
            : board,
        ),
      };
      return newState;
    case "UPDATE_TASK":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? {
                ...board,
                columns: board.columns.map((column) =>
                  column.id === action.payload.columnId
                    ? {
                        ...column,
                        tasks: column.tasks.map((task) =>
                          task.id === action.payload.task.id
                            ? action.payload.task
                            : task,
                        ),
                      }
                    : column,
                ),
              }
            : board,
        ),
      };
      return newState;
    case "ADD_SUBTASK":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? {
                ...board,
                columns: board.columns.map((column) =>
                  column.id === action.payload.columnId
                    ? {
                        ...column,
                        tasks: column.tasks.map((task) =>
                          task.id === action.payload.taskId
                            ? {
                                ...task,
                                subtasks: [
                                  ...task.subtasks,
                                  action.payload.subtask,
                                ],
                              }
                            : task,
                        ),
                      }
                    : column,
                ),
              }
            : board,
        ),
      };
      return newState;
    case "REMOVE_SUBTASK":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? {
                ...board,
                columns: board.columns.map((column) =>
                  column.id === action.payload.columnId
                    ? {
                        ...column,
                        tasks: column.tasks.map((task) =>
                          task.id === action.payload.taskId
                            ? {
                                ...task,
                                subtasks: task.subtasks.filter(
                                  (subtask) =>
                                    subtask.id !== action.payload.subtaskId,
                                ),
                              }
                            : task,
                        ),
                      }
                    : column,
                ),
              }
            : board,
        ),
      };
      return newState;
    case "TOGGLE_SUBTASK_COMPLETION":
      newState = {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? {
                ...board,
                columns: board.columns.map((column) =>
                  column.id === action.payload.columnId
                    ? {
                        ...column,
                        tasks: column.tasks.map((task) =>
                          task.id === action.payload.taskId
                            ? {
                                ...task,
                                subtasks: task.subtasks.map((subtask) =>
                                  subtask.id === action.payload.subtaskId
                                    ? {
                                        ...subtask,
                                        isCompleted: !subtask.isCompleted,
                                      }
                                    : subtask,
                                ),
                              }
                            : task,
                        ),
                      }
                    : column,
                ),
              }
            : board,
        ),
      };
      return newState;
    default:
      return state;
  }
};
