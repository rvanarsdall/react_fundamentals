import { useState } from "react";

const TenLittleMonkeys = () => {
  const [count, setCount] = useState(10);

  function handleClick() {
    // Subtract count
    if (count != 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p>
        {count != 0 ? `${count} little monkies jumping` : "no more monkeys"}
      </p>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};
export default TenLittleMonkeys;
