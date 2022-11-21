import { useDispatch } from "react-redux";
import { filterTodo } from "../../../../redux/todos/todoSlice";
import Button from "../../../Button/Button";

const FilterButtons = (props) => {
  const { filter, setFilter, count, countActive, countCompleted } = props;

  const buttonData = [
    { title: "ALL", count: count },
    { title: "ACTIVE", count: countActive },
    { title: "COMPLETED", count: countCompleted },
  ];

  const dispatch = useDispatch();

  const filterTodos = (title) => {
    setFilter(title);
    dispatch(filterTodo(title));
  };

  return (
    <div>
      {buttonData.map((item) => (
        <Button
          key={item.title}
          isActive={item.title === filter}
          onClick={() => filterTodos(`${item.title}`)}
        >
          {item.title} {item.count}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
