import { useState } from "react";
import "./App.css";

function App() {
  const [note, useNote] = useState("");
  return (
    <div className="App">
      <div>
        <img src="" alt="Logo" />
      </div>
      <div>
        <input type="text" placeholder="Add notes here" id="input_box" />
      </div>
      <div>
        <button>Submit</button>
      </div>
      <div>{note}</div>
    </div>
  );
}

export default App;
