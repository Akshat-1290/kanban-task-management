import { ModalBase } from "./ModalBase"

export const ErrorDeleteModal = ({boardName , onClick} : {boardName : string , onClick : () => void}) => {
  return (
    <ModalBase>
      <div className="space-y-3 px-2">
        <h2 className="text-base font-semibold text-red-500">
          Error Deleting Board
        </h2>
        <p className="text-sm leading-6 text-neutral-500">
        Unable to delete board '{boardName}'  as there are no more boards. Create another board first if you want to delete this one.
        </p>
        <div className="flex justify-center gap-5">
        <button
            type="button"
            tabIndex={1}
            className="h-10 w-full rounded-full bg-blue-200 bg-opacity-80 hover:bg-blue-400"
            onClick={() => onClick()}
          >
            Confirm
          </button>
        </div>
      </div>
    </ModalBase>
  )
}
