import { useState } from "react";

export default function Array() {
  const [arr, setArr] = useState(["a", "b", "c", "d"]);

  function add() {
    const newArr = document.getElementById("input").value;
    setArr(a => [...a, newArr]);
  }

  function remove(index) {
    setArr(arr.filter((_, i) => i !== index));
  }

  return (
    <>
      <input type="text" id="input" />
      <button onClick={add}>Add</button>

      <ul>
        {arr.map((a, index) => (
          <li key={index}>
            {a}
            <button onClick={() => remove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}