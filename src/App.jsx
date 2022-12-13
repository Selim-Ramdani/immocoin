import { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [cartItems] = useState([]);

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={null}></Route>
      </Routes>
    </div>
  );
}

export default App;
