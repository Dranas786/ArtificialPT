import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>Rate your exercise</h1>
      <h2>0.0</h2>
      <form>
        <div className="basic">
          <input type="text" placeholder={"Bench Press"} />
          <input type="text" placeholder={"8 (Number of reps)"} />
          <input type="text" placeholder={"2 (Number of sets)"} />
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
            <div className="Score"> 9.0</div>
            <div className="rep_set">8, 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
