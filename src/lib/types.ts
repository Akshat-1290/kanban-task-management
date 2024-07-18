export type SubTasks = {
    id: string;
    taskId : string
    title: string;
    isCompleted: boolean;
  };

  export type Tasks = {
    id: string;
    columnId : string
    title: string;
    description: string;
    status: string;
    subtasks: SubTasks[];
  };

  export type Column = {
    id: string;
    boardId: string;
    name: string;
    tasks: Tasks[];
  };

  export type Board = {
    id: string;
    name: string;
    columns: Column[];
  };

  export type BoardState = {
    boards: Board[];

  }
  export type BoardAction =
  | { type: 'SET_INITIAL_STATE'; payload: BoardState }
  | { type: 'ADD_BOARD'; payload: Board }
  | { type: 'REMOVE_BOARD'; payload: string }
  | { type: 'UPDATE_BOARD'; payload: Board }
  | {
      type: 'ADD_TASK';
      payload: {
        boardId: string;
        columnId: string;
        task: Tasks;
      };
    }
  | {
      type: 'REMOVE_TASK';
      payload: {
        boardId: string;
        columnId: string;
        taskId: string;
      };
    };


export type SettingsType = {
  darkMode : boolean | null,
  isMobileSidebarOpen : boolean ,
  isSidebarOpen : boolean | null,
  lastActivatedBoard : string
}

export type SettingsAction =
| { type: 'SET_DARK_MODE' , payload : boolean | null}
| { type: 'SET_MOBILE_SIDEBAR' , payload : boolean | null}
| { type: 'SET_SIDEBAR' , payload : boolean | null}
| { type: 'SET_LAST_ACTIVE_BOARD'; payload: string}

