import { useState , useEffect, useReducer, type FC, type ReactNode } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { initialState, reducer } from "../reducers/settingsReducer";

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isInitialized, setIsInitialized] = useState(false);


  useEffect(() => {
    const storedSidebarVal = localStorage.getItem("isSidebarOpen");
    storedSidebarVal &&
      dispatch({ type: "SET_SIDEBAR", payload: JSON.parse(storedSidebarVal) });
      setIsInitialized(true)
      }, []);

  useEffect(() => {
    state.isSidebarOpen !== null &&
      localStorage.setItem(
        "isSidebarOpen",
        JSON.stringify(state.isSidebarOpen)
      );
  }, [state.isSidebarOpen]);

  if (!isInitialized) {
    return null;
}


  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
