import { type FC } from "react";

type ColumnListProps = {
  selectedColumn: string;
  setSelectedColumn: React.Dispatch<React.SetStateAction<string>>;
  columnNameList: string[];
};

export const ColumnList: FC<ColumnListProps> = ({
  selectedColumn,
  setSelectedColumn,
  columnNameList,
}) => {
  const selectedColumnIndex = columnNameList.indexOf(selectedColumn);

  // Create a copy of columnNameList to avoid mutating the original array
  const updatedColumnNameList = [...columnNameList];

  // If the selected column is found, move it to the 0th index
  if (selectedColumnIndex !== -1) {
    const [selectedColumnName] = updatedColumnNameList.splice(
      selectedColumnIndex,
      1,
    );
    updatedColumnNameList.unshift(selectedColumnName ?? "");
  }

  return (
    <div className="task-footer mt-4">
      <p className="text-xs font-semibold text-neutral-500 dark:text-white">
        Current Status
      </p>
      <select
        name="column"
        id="column-select"
        className="mt-4 w-full rounded-md border-2 border-blue-300 p-2 dark:border-purple-500 dark:bg-neutral-700 dark:text-white"
        value={selectedColumn}
        onChange={(e) => setSelectedColumn(e.target.value)}
      >
        {updatedColumnNameList.map((name, index) => {
          return (
            <option key={name + index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
