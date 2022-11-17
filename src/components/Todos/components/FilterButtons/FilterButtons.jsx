import Button from "../../../Button/Button";

const FilterButtons = (props) => {
  const { filter, setFilter, count, countActive, countCompleted } = props;

  const buttonData = [
    { title: "ALL", count: count },
    { title: "ACTIVE", count: countActive },
    { title: "COMPLETED", count: countCompleted },
  ];

  return (
    <div>
      {buttonData.map((item) => (
        <Button
          key={item.title}
          isActive={item.title === filter}
          onClick={() => setFilter(`${item.title}`)}
        >
          {item.title} {item.count}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
