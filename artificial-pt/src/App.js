import "./App.css";
import { useState } from "react";

function App() {
  const [exerciseName, setExerciseName] = useState("");
  const [set, setSet] = useState(0);
  const [reps, setReps] = useState(0);
  function handleSubmit(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/exercises";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exerciseName, set, reps }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return (
    <div className="main">
      <h1>Rate your exercise</h1>
      <h2>0.0</h2>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input
            type="text"
            value={exerciseName}
            onChange={(ev) => setExerciseName(ev.target.value)}
            placeholder={"Bench Press"}
          />
          <input
            type="text"
            value={reps}
            onChange={(ev) => setReps(ev.target.value)}
            placeholder={"8 (Number of reps)"}
          />
          <input
            type="text"
            value={set}
            onChange={(ev) => setSet(ev.target.value)}
            placeholder={"2 (Number of sets)"}
          />
        </div>

        <button type="submit">Add another exercise</button>
      </form>
      <div className="exercises">
        <div className="exercise">
          <div className="left">
            <div className="name"> Bench press</div>
            <div className="muscle">Chest</div>
          </div>
          <div className="right">
            <div className="Score green"> 9.0</div>
            <div className="rep_set">8, 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
