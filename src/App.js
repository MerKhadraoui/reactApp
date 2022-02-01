import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Todos from "./components/Todos";
function App() {
  const [list, setList] = useState([]);
  function removeItem(itemId) {}
  return (
    <React.Fragment>
      <Header />
      <List setList={setList} />
      <Todos list={list} removeItem={removeItem} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
