import { Form } from "react-router-dom";
import type { Board, Column } from "../lib/types";
import { ModalBase } from "../ModalComponents/ModalBase";
import { Input, Label } from "../components/FormComponents";
import { useState } from "react";
type BoardModalProps = {
  board?: Board;
  newColumn?: boolean;
};

export const BoardModal = ({ board, newColumn }: BoardModalProps) => {
  const initialColumns = board
    ? newColumn
      ? [
          ...board.columns,
          {
            id: crypto.randomUUID(),
            name: "",
            tasks: [],
          } as Column,
        ]
      : board.columns
    : [];

  const renameColumn = (id: string, newName: string) => {
    setColumns(
      columns.map((column) =>
        column.id === id ? { ...column, name: newName } : column,
      ),
    );
  };

  const deleteColumn = (id: string) => {
    setColumns(columns.filter((column) => column.id !== id));
  };

  const addColumn = () => {
    setColumns([
      ...columns,
      {
        id: crypto.randomUUID(),
        name: "",
        tasks: [],
      } as Column,
    ]);
  };

  const [boardName, setBoardName] = useState(board?.name || "");
  const [columns, setColumns] = useState(initialColumns);

  return (
    <>
      <ModalBase>
        <Form method="post">
          <h2 className="text-lg font-bold dark:text-white">
            {board ? "Edit Board" : "Add New Board"}
          </h2>
          <Label caption="Board Name">
            <Input
              name="name"
              placeholder="e.g. Web Design"
              value={boardName}
              onChange={(value) => {
                setBoardName(value);
              }}
            />
          </Label>
          <Label caption="Board Columns">
            <ul className="space-y-4">
              {columns.map((column, index) => {
                return (
                  <li key={column.id} className="flex items-center gap-3">
                    <Input
                      name={`column:${column.id}`}
                      value={column.name}
                      onChange={(value) => renameColumn(column.id, value)}
                      autofocus={
                        column.name === "" && index === columns.length - 1
                      }
                    />
                    <button
                      type="button"
                      onClick={() => deleteColumn(column.id)}
                    >
                      <img
                        src="/icon-cross.svg"
                        alt="cross icon"
                        className="w-4"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Label>
          <button
            type="button"
            onClick={() => addColumn()}
            className="mt-3 w-full rounded-full bg-purple-100 p-2 text-sm font-bold text-purple-500 dark:bg-white"
          >
            + Add New Column
          </button>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-purple-500 p-2 text-sm font-bold text-white"
          >
            {board ? "Save Changes" : "Add Board"}
          </button>
        </Form>
      </ModalBase>
    </>
  );
};
