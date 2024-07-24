import { useContext, useRef } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const ThemeSwitcher = () => {
  const themeButtonRef = useRef<HTMLButtonElement>(null);
  const {
    state: { darkMode },
    dispatch,
  } = useContext(SettingsContext);

  return (
    <>
      <div className="theme-switcher flex justify-center sm:bottom-20 sm:mt-auto sm:w-full">
        <div className="mt-5 flex w-11/12 items-center justify-evenly rounded-md bg-blue-100 py-3 dark:bg-neutral-800">
          <img
            src="/icon-light-theme.svg"
            alt="sun"
            className="cursor-pointer"
          />
          <button
            type="button"
            role="switch"
            className={`after-content-[''] relative h-5 w-11 rounded-full bg-purple-500 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:duration-200 ${darkMode ? "activeSwitch" : ""}`}
            ref={themeButtonRef}
            onClick={() => dispatch({ type: "SET_DARK_MODE", payload: null })}
          ></button>
          <img
            src="/icon-dark-theme.svg"
            alt="moon"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};
