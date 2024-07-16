import type { SettingsType, SettingsAction } from "../lib/types";

export const initialState: SettingsType = {
  darkMode: false,
  isMobileSidebarOpen: false,
  isSidebarOpen: false,
  lastActivatedBoard: "",
};

export const reducer = (state: SettingsType, action: SettingsAction) : SettingsType => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };
    case "TOGGLE_MOBILE_SIDEBAR":
      return { ...state, isMobileSidebarOpen: !state.isMobileSidebarOpen };
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "SET_LAST_ACTIVE_BOARD":
      return { ...state, lastActivatedBoard: action.payload };

    default:
      return state;
  }
};
