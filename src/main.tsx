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

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index : true,
        loader: async () => {
          const lastActiveBoardId = await localforage.getItem("lastActiveBoardId");
          if (lastActiveBoardId) {
          return redirect(`/boards/${lastActiveBoardId}`);
          } else {
            return redirect("/boards");
          }
        },
      },
      {
        path: "/boards/:boardId",
        element: <App />,
      },
      {
        path: "/boards",
        element: <App />,
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
