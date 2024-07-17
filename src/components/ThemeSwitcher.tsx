import { useRef } from "react";

export const ThemeSwitcher = () => {
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleSwitch = () => {
   themeButtonRef.current?.classList.toggle("activeSwitch");
  };

  return (
    <>
      <div className="theme-switcher flex justify-center sm:mt-auto sm:w-full sm:bottom-20">
        <div className="flex w-11/12 justify-evenly items-center mt-5 bg-blue-100 py-3 rounded-md">
          <img src="/icon-light-theme.svg" alt="sun" className="cursor-pointer" />
          <button
            type="button"
            role="switch"
            className="w-11 h-5 rounded-full relative bg-purple-500 after-content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:duration-200"
            ref={themeButtonRef}
            onClick={toggleSwitch}
          ></button>
          <img src="/icon-dark-theme.svg" alt="moon" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};
