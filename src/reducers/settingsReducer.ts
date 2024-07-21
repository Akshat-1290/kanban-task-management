import type { SettingsType, SettingsAction } from "../lib/types";

export const initialState: SettingsType = {
  darkMode: null,
  isMobileSidebarOpen:false ,
  isSidebarOpen: null,
};

export const reducer = (state: SettingsType, action: SettingsAction) : SettingsType => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "SET_MOBILE_SIDEBAR":
      return { ...state, isMobileSidebarOpen: action.payload ?? !state.isMobileSidebarOpen };
    case "SET_SIDEBAR":
      return { ...state, isSidebarOpen: action.payload ?? !state.isSidebarOpen };
    default:
      return state;
  }
};
