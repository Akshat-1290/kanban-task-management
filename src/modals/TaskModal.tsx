import { Form } from "react-router-dom";
import type { Board, SubTasks, Tasks } from "../lib/types";
import { ModalBase } from "../ModalComponents/ModalBase";
import { Input, Label } from "../components/FormComponents";
import { useState } from "react";
import { ColumnList } from "../ModalComponents/ColumnList";
type TaskModalProps = {
  board: Board;
  task?: Tasks;
  colId?: string;
};

export const TaskModal = ({ board, task, colId }: TaskModalProps) => {
  const [title, setTitle] = useState(task?.title || "");
  const [desc, setDesc] = useState(task?.description || "");
  const [subtasks, setSubtasks] = useState(task?.subtasks || []);

  const columnNameList = board?.columns.map((column) => column.name);
  const activeColumnName = board.columns.find(
    (column) => column.id === colId,
  )?.name;

  const [selectedColumn, setSelectedColumn] = useState(
    activeColumnName || columnNameList[0] || "",
  );

  const addSubtask = () => {
    setSubtasks([
      ...subtasks,
      {
        id: crypto.randomUUID(),
        title: "",
        isCompleted: false,
      } as SubTasks,
    ]);
  };

  const deleteSubtask = (id: string) => {
    setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
  };
  const renameSubtask = (id: string, newName: string) => {
    setSubtasks(
      subtasks.map((subtask) =>
        subtask.id === id ? { ...subtask, title: newName } : subtask,
      ),
    );
  };

  return (
    <>
      <ModalBase>
        <Form method="post">
          <h2 className="text-lg font-bold">
            {task ? "Edit Task" : "Add New Task"}
          </h2>
          <Label caption="Title">
            <Input
              name="title"
              placeholder="e.g. Take Coffe Break"
              value={title}
              onChange={(value) => {
                setTitle(value);
              }}
            />
          </Label>
          <Label caption="Description">
            <Input
              name="description"
              placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
              value={desc}
              onChange={(value) => {
                setDesc(value);
              }}
            />
          </Label>
          <Label caption="Subtasks">
            <ul className="space-y-4">
              {subtasks &&
                subtasks.map((subtask, index) => {
                  return (
                    <li key={subtask.id} className="flex items-center gap-3">
                      <Input
                        name={`subtask:${subtask.id}`}
                        value={subtask.title}
                        onChange={(value) => renameSubtask(subtask.id, value)}
                        autofocus={
                          subtask.title === "" && index === subtasks.length - 1
                        }
                      />
                      <button
                        type="button"
                        onClick={() => deleteSubtask(subtask.id)}
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
            onClick={() => addSubtask()}
            className="mt-3 w-full rounded-full bg-purple-100 p-2 text-sm font-bold text-purple-500"
          >
            + Add New Subtask
          </button>
          <ColumnList
            selectedColumn={selectedColumn}
            setSelectedColumn={setSelectedColumn}
            columnNameList={columnNameList}
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-purple-500 p-2 text-sm font-bold text-white"
          >
            {task ? "Save Changes" : "Add Task"}
          </button>
        </Form>
      </ModalBase>
    </>
  );
};
