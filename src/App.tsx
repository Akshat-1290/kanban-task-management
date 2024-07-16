import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BoardProvider } from "./context/BoardContext";

function App() {
  return (
    <>
      <BoardProvider>
        <Navbar />
        <Sidebar />
      </BoardProvider>
    </>
  );
}

export default App;
