import { useEffect, useReducer, type FC, type ReactNode } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { initialState, reducer } from "../reducers/settingsReducer";

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedSidebarVal = localStorage.getItem("isSidebarOpen");
    storedSidebarVal &&
      dispatch({ type: "SET_SIDEBAR", payload: JSON.parse(storedSidebarVal) });
  }, []);

  useEffect(() => {
    state.isSidebarOpen !== null &&
      localStorage.setItem(
        "isSidebarOpen",
        JSON.stringify(state.isSidebarOpen)
      );
  }, [state.isSidebarOpen]);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
