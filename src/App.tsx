import { useContext, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BoardContext } from "./context/BoardContext";
import localforage from "localforage";
import defaultBoards from "./lib/data";
import type { Board } from "./lib/types";

function App() {
  const { dispatch } = useContext(BoardContext);
  useEffect(() => {
    const initializeBoards = async () => {
      const storedBoards: Board[] | null = await localforage.getItem("boards");
      if (!storedBoards) {
        console.log("here");
        dispatch({
          type: "SET_INITIAL_STATE",
          payload: { boards: defaultBoards },
        });
        localforage.setItem("boards", defaultBoards);
      } else {
        storedBoards &&
          dispatch({
            type: "SET_INITIAL_STATE",
            payload: { boards: storedBoards },
          });
      }
    };

    initializeBoards();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
