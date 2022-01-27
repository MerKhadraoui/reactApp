import { useState } from "react";
const List = (props) => {
  const [userInput, setUserInput] = useState("");
  function changeHendle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    props.setList((prevState) => [
      ...prevState,
      { id: prevState.length, title: userInput.trim(), done: false },
    ]);
  }

  return (
    <form type={submitHandle}>
      <input type="text" value={userInput} onChange={changeHendle} />
      <input type="submit" value="Add" />
    </form>
  );
};
export default List;
