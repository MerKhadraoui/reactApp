function App() {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>React ap plication </h1>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your Name" />
      </form>
      <img src="./images/tree.jpeg" alt="img" />
    </div>
  );
}

export default App;
