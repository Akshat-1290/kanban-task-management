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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async ({ params }) => {
      return params.boardId || null;
    },
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
        loader: async ({ params }) => {
          return params.boardId;
        },
        children: [
          {
            path: "/boards/:boardId/new",
            element : <CreateBoardModal/>,
            action : CreateBoardModal.action
          },
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
