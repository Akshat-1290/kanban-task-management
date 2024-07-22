import { Link } from "react-router-dom"

export const EmptyBoard = ({boardId} : {boardId : string}) => {
  return (
    <div className="flex flex-col items-center mt-60 gap-8">
        <p className="font-bold text-center text-lg text-neutral-500">The Board is empty. Create a new column to get started.</p>
        <Link to={`/boards/${boardId}/newColumn`} className="w-56 text-white font-bold h-14 rounded-full bg-purple-500 flex justify-center items-center">+ Add New Column</Link>
    </div>
  )
}
