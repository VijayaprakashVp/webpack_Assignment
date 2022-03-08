import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState("");
  const [note_taking, setNote_taking] = useState([]);

  const handleSubmit = () => {
    setNote_taking([...note_taking, note]);
  };

  return (
    <div className="App">
      <img src="" alt="Logo" />
      <input
        onChange={(e) => setNote(e.target.value)}
        type="text"
        placeholder="Add notes here"
        id="input_box"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {note_taking.map((e) => {
          return <p>{e}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
