import { FilterButtonProps } from "../modal/Todo";

const FilterButtons = ({ handleFilter, buttons }: FilterButtonProps) => {
  return (
    <div className="flex justify-content items-center">
      <p className="text-xl">Filter by:</p>
      {buttons.map((name, id) => {
        return (
          <button
            data-testid="filter"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded"
            onClick={() => handleFilter(name)}
            key={id}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
