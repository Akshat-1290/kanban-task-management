import React from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BoardProvider } from "./provider/BoardProvider";
import "./index.css";
import { SettingsProvider } from "./provider/SettingsProvider";
import localforage from "localforage";
import { Board } from "./components/Board";
import { CreateBoardModal } from "./ModalComponents/CreateBoardModal";
import { EditBoardModal } from "./ModalComponents/EditBoardModal";
import { DeleteBoardModal } from "./ModalComponents/DeleteBoardModal";
import { ViewTaskModal } from "./ModalComponents/ViewTaskModal";
import { CreateTaskModal } from "./ModalComponents/CreateTaskModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: async () => {
          const lastActiveBoardId = await localforage.getItem(
            "lastActiveBoardId"
          );
          if (lastActiveBoardId) {
            return redirect(`/boards/${lastActiveBoardId}`);
          } else {
            return redirect("/boards");
          }
        },
      },
      {
        path: "/boards/:boardId",
        element: <Board />,
        id : "board",
        loader: async ({ params }) => {
          return params.boardId;
        },
        children: [
          {
            path: "/boards/:boardId/new",
            element : <CreateBoardModal/>,
            action : CreateBoardModal.action
          },
          {
            path : "/boards/:boardId/edit",
            element : <EditBoardModal newColumn={false}/>,
            action : EditBoardModal.action,
          },
          {
            path : "/boards/:boardId/newColumn",
            element : <EditBoardModal newColumn={true}/>,
            action : EditBoardModal.action,
          },
          {
            path : "/boards/:boardId/delete",
            element : <DeleteBoardModal/>
          },
          {
            path : "/boards/:boardId/column/:columnId/tasks/:taskId",
            id : "task",
            loader : ViewTaskModal.loader,
            children : [
              {
                path : "/boards/:boardId/column/:columnId/tasks/:taskId/view",
                element: <ViewTaskModal/>,
              },
              {
                path : "/boards/:boardId/column/:columnId/tasks/:taskId/edit",
              },
              {
                path : "/boards/:boardId/column/:columnId/tasks/:taskId/delete",
              },
            ]
          },
          {
            path : "/boards/:boardId/newTask",
            element : <CreateTaskModal/>,
            action : CreateTaskModal.action
          }
        ],
      },
      {
        path: "/boards",
        element: <Board />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BoardProvider>
      <SettingsProvider>
        <RouterProvider router={router}></RouterProvider>
      </SettingsProvider>
    </BoardProvider>
  </React.StrictMode>
);
