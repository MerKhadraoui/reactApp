import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value.trim());
  }

  return (
    <div>
      {/* <h1>React ap plication </h1>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your Name" />
      </form>
      <img src="./images/tree.jpeg" alt="img" /> */}
      <form>
        <input type="text" value={userInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
