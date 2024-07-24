export type SubTasks = {
    id: string;
    title: string;
    isCompleted: boolean;
  };

  export type Tasks = {
    id: string;
    title: string;
    description: string;
    status: string;
    subtasks: SubTasks[];
  };

  export type Column = {
    id: string;
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
    }
  | {
      type: 'UPDATE_TASK';
      payload: {
        boardId: string;
        columnId: string;
        task : Tasks;
      };
    }
  | {
      type: 'ADD_SUBTASK';
      payload: {
        boardId: string;
        columnId: string;
        taskId: string;
        subtask: SubTasks;
      };
    }
  | {
      type: 'REMOVE_SUBTASK';
      payload: {
        boardId: string;
        columnId: string;
        taskId: string;
        subtaskId : string
      };
    }
  | {
      type: 'TOGGLE_SUBTASK_COMPLETION';
      payload: {
        boardId: string;
        columnId: string;
        taskId: string;
        subtaskId : string
      };
    };



export type SettingsType = {
  darkMode : boolean | null,
  isMobileSidebarOpen : boolean ,
  isSidebarOpen : boolean | null,
}

export type SettingsAction =
| { type: 'SET_DARK_MODE'}
| { type: 'SET_MOBILE_SIDEBAR' , payload : boolean | null}
| { type: 'SET_SIDEBAR' , payload : boolean | null}

