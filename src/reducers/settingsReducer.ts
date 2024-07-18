import type { SettingsType, SettingsAction } from "../lib/types";

export const initialState: SettingsType = {
  darkMode: null,
  isMobileSidebarOpen:false ,
  isSidebarOpen: null,
  lastActivatedBoard: "",
};

export const reducer = (state: SettingsType, action: SettingsAction) : SettingsType => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload ?? !state.darkMode };
    case "SET_MOBILE_SIDEBAR":
      return { ...state, isMobileSidebarOpen: action.payload ?? !state.isMobileSidebarOpen };
    case "SET_SIDEBAR":
      return { ...state, isSidebarOpen: action.payload ?? !state.isSidebarOpen };
    case "SET_LAST_ACTIVE_BOARD":
      return { ...state, lastActivatedBoard: action.payload };

    default:
      return state;
  }
};
