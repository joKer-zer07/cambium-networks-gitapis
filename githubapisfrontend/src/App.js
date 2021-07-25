import React, { useState } from "react";
import "./App.css";
import View1 from "./components/View1";
import View2 from "./components/View2";
import Switch from "react-switch";
function App() {
  const [checked, setChecked] = useState(true);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>Please toggle between View1 and View2</label>
        <Switch onChange={handleChange} checked={checked} />
        <p>{checked ? "View 1" : "View 2"}</p>
        {checked ? <View1 /> : <View2 />}
      </header>
    </div>
  );
}

export default App;
