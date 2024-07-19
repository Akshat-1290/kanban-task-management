import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SettingsContext } from "../context/SettingsContext";

type BoardLinkProps = {
  boardName: string;
  boardId: string;
  isSmallDevice: boolean;
};

export const BoardLink = ({
  boardName,
  boardId,
  isSmallDevice,
}: BoardLinkProps) => {
  const { dispatch } = useContext(SettingsContext);
  return (
    <>
      <li className=" mr-4 ">
        <NavLink
          to={`/boards/${boardId}`}
          className={({ isActive }) =>
            `pl-5 flex gap-4 items-center pr-4 h-12 rounded-tr-full rounded-br-full  font-medium ${
              isActive
                ? "bg-purple-500 text-white"
                : "bg-transparent text-neutral-600"
            }`
          }
          onClick={() => {
            isSmallDevice &&
              dispatch({ type: "SET_MOBILE_SIDEBAR", payload: false });
          }}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>{boardName}</span>
        </NavLink>
      </li>
    </>
  );
};
