import { useState } from "react";
import Button from "../../../Button/Button";

const FilterButtons = (props) => {
  const [active, setActive] = useState("ALL");
  console.log(active);

  return (
    <>
      <Button onClick={() => setActive("ALL")}>All</Button>
      <Button onClick={() => setActive("ACTIVE")}>Active</Button>
      <Button onClick={() => setActive("COMPLETED")}>Completed</Button>
    </>
  );
};

export default FilterButtons;
