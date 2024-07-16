import { createContext} from "react";
import { initialState } from "../reducers/settingsReducer";
import type { SettingsAction, SettingsType } from "../lib/types";


export const SettingsContext = createContext<{
  state: SettingsType;
  dispatch: React.Dispatch<SettingsAction>;
}>({
  state: initialState,
  dispatch: () => null,
});




