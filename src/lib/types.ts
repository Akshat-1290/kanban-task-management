export type Column  ={
    id: string;
    name: string;
    boardId : string
    tasks : Tasks[]
  }

  export type Tasks =  {
    id: string;
    title: string;
    columnId: string;
    description: string;
    status: string;
    subTasks : SubTasks[]
  }

  export type SubTasks =  {
    id: string;
    title: string;
    taskId: string;
    isCompleted: boolean;
  }

  export type Board =  {
    id: string;
    name: string;
    columns: Column[]
  }


export type BoardState =  {
   boards : Board[]
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

