import Button from "../../../Button/Button";

const FilterButtons = (props) => {
  const { filter, setFilter, todos } = props;

  const allCount = todos.length;
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const buttonData = [
    {
      title: "ALL",
      class: `${filter === "ALL" ? "active" : ""}`,
      count: allCount,
    },
    {
      title: "ACTIVE",
      class: `${filter === "ACTIVE" ? "active" : ""}`,
      count: activeCount,
    },
    {
      title: "COMPLETED",
      class: `${filter === "COMPLETED" ? "active" : ""}`,
      count: completedCount,
    },
  ];

  return (
    <div>
      {buttonData.map((item) => (
        <Button
          key={item.title}
          className={item.class}
          onClick={() => setFilter(`${item.title}`)}
        >
          {item.title} {item.count}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
