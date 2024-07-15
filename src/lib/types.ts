export type Column  ={
    id: string;
    name: string;
    tasks : Tasks[]
  }

  export type Tasks =  {
    id: string;
    title: string;
    description: string;
    status: string;
    subTasks : SubTasks[]
  }

  export type SubTasks =  {
    id: string;
    title: string;
    isCompleted: boolean;
  }

  export type Board =  {
    id: string;
    name: string;
    columns: Column[]
  }


export interface BoardState {
   boards : Board[]
  }



