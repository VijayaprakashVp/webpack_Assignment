import { useState } from "react";
import "./App.css";
import "./Logo.png";

function App() {
  const [note, setNote] = useState("");
  const [note_taking, setNote_taking] = useState([]);

  const handleSubmit = () => {
    setNote_taking([...note_taking, note]);
  };

  return (
    <div className="App">
      <div className="div">
        <h1>Note Taking App</h1>
        <div>
          <img
            src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo-700x394.png"
            alt="Logo"
          />
        </div>
        <div>
          <input
            onChange={(e) => setNote(e.target.value)}
            type="text"
            placeholder="Add notes here"
            id="input_box"
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <div>
          {note_taking.map((e) => {
            return <p>{e}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
