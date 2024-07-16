import { useReducer, type FC, type ReactNode } from "react"
import { SettingsContext } from "../context/SettingsContext"
import { initialState, reducer } from "../reducers/settingsReducer"

interface SettingsProviderProps {
    children : ReactNode
}

export const SettingsProvider : FC<SettingsProviderProps> = ({children}) => {
    const [state , dispatch] = useReducer(reducer , initialState)
  return (
  <SettingsContext.Provider value={{state , dispatch}}>
    {children}
  </SettingsContext.Provider>
  )
}
