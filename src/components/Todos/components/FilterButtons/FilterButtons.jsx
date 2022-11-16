import Button from "../../../Button/Button";

const FilterButtons = (props) => {
  const { filter, setFilter, todos } = props;

  const allCount = todos.length;
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <Button className={`${filter === "ALL" ? 'active' : ''}`} onClick={() => setFilter("ALL")}>
        All {allCount}
      </Button>

      <Button className={`${filter === "ACTIVE" ? 'active' : ''}`} onClick={() => setFilter("ACTIVE")}>
        Active {activeCount}
      </Button>

      <Button className={`${filter === "COMPLETED" ? 'active' : ''}`} onClick={() => setFilter("COMPLETED")}>
        Completed {completedCount}
      </Button>
    </div>
  );
};

export default FilterButtons;
