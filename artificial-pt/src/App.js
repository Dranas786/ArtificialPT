import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [exerciseName, setExerciseName] = useState("");
  const [set, setSet] = useState(0);
  const [reps, setReps] = useState(0);
  const [exercise, setExercise] = useState([]);
  // const [setArr, setSetArr] = useState([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29,
  // ]);
  // const [repArr, setrepArr] = useState([1, 2, 3, 4, 5]);
  // const [nameArr, setNameArr] = useState([
  //   "Kneeling Squat",
  //   "Flexor Incline Dumbbell Curls",
  //   "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl",
  //   "Close-grip pull-down",
  //   "Bodyweight Flyes",
  //   "Windmills",
  //   "Cocoons",
  //   "Power Snatch",
  //   "Rocky Pull-Ups/Pulldowns",
  //   "Barbell Full Squat",
  //   "Smith Machine Calf Raise",
  //   "Spider crawl",
  //   "Chest dip",
  //   "Atlas Stones",
  //   "Hyperextensions With No Hyperextension Bench",
  //   "Leverage Shrug",
  //   "Calf-Machine Shoulder Shrug",
  //   "Close-Grip Front Lat Pulldown",
  //   "Hammer Curls",
  //   "EZ-bar spider curl",
  //   "Concentration curl",
  //   "Snatch Deadlift",
  //   "Chin To Chest Stretch",
  //   "Incline Hammer Curls",
  //   "Suspended ab fall-out",
  //   "Barbell Bench Press - Medium Grip",
  //   "Single-Leg Press",
  //   "Single-leg lying cross-over stretch",
  //   "Rower",
  //   "Kettlebell sumo deadlift high pull",
  //   "Glute Kickback",
  //   "Standing dumbbell upright row",
  //   "Dumbbell Bench Press",
  //   "One-Arm Long Bar Row",
  //   "T-Bar Row",
  //   "Palms-up wrist curl over bench",
  //   "Hip Circles (Prone)",
  //   "Low-cable cross-over",
  //   "Single-arm cable triceps extension",
  //   "Pullups",
  //   "Iliotibial band SMR",
  //   "Seated Head Harness Neck Resistance",
  //   "Decline Dumbbell Flyes",
  //   "Decline EZ-bar skullcrusher",
  //   "Push-Ups - Close Triceps Position",
  //   "IT Band and Glute Stretch",
  //   "Muscle Up",
  //   "Adductor SMR",
  //   "Back extension",
  //   "One-Arm Dumbbell Row",
  //   "Flutter Kicks",
  //   "Side Leg Raises",
  //   "EZ-Bar Curl",
  //   "Deadlift with Bands",
  //   "Pull-up",
  //   "Biceps curl to shoulder press",
  //   "Jumping rope",
  //   "Natural Glute Ham Raise",
  //   "Alternating sit-through with crunch",
  //   "Straight-bar wrist roll-up",
  //   "Lying Face Down Plate Neck Resistance",
  //   "Bottoms Up",
  //   "Lying Face Up Plate Neck Resistance",
  //   "Calf Press On The Leg Press Machine",
  //   "Dumbbell V-Sit Cross Jab",
  //   "Isometric Neck Exercise - Sides",
  //   "Kettlebell thruster",
  //   "Shotgun row",
  //   "Reverse Band Box Squat",
  //   "Close-grip bench press",
  //   "Cable V-bar push-down",
  //   "Deadlift with Chains",
  //   "Standing behind-the-back wrist curl",
  //   "Pushups",
  //   "Palms-down wrist curl over bench",
  //   "Triceps dip",
  //   "Neck-SMR",
  //   "EZ-Bar Skullcrusher",
  //   "Wide-grip barbell curl",
  //   "Calf Press",
  //   "Seated Calf Raise",
  //   "Barbell deficit deadlift",
  //   "Single-leg glute bridge",
  //   "Superman",
  //   "Thigh adductor",
  //   "Rope climb",
  //   "Barbell Seated Calf Raise",
  //   "Clean from Blocks",
  //   "Clam",
  //   "Balance Board",
  //   "Power snatch-",
  //   "Smith machine shrug",
  //   "Dumbbell Flyes",
  //   "Weighted pull-up",
  //   "Tire flip",
  //   "Hang Clean",
  //   "Landmine twist",
  //   "Sumo deadlift",
  //   "Single-leg cable hip extension",
  //   "Glute ham raise-",
  //   "Dumbbell spell caster",
  //   "Glute bridge",
  //   "Reverse Grip Triceps Pushdown",
  //   "Thigh abductor",
  //   "Standing barbell calf raise",
  //   "Bent Over Two-Arm Long Bar Row",
  //   "Side Neck Stretch",
  //   "Seated One-Arm Dumbbell Palms-Up Wrist Curl",
  //   "Power Clean from Blocks",
  //   "Weighted bench dip",
  //   "Rickshaw Carry",
  //   "Band Hip Adductions",
  //   "Standing Calf Raises",
  //   "Rocking Standing Calf Raise",
  //   "Wrist Roller",
  //   "Elbow plank",
  //   "Clean Deadlift",
  //   "Axle Deadlift",
  //   "Incline dumbbell row",
  //   "Standing Hip Circles",
  //   "Step-up with knee raise",
  //   "Seated Cable Rows",
  //   "Groin and Back Stretch",
  //   "Groiners",
  //   "Seated finger curl",
  //   "Incline dumbbell bench press",
  //   "Rack Pull with Bands",
  //   "Zottman Curl",
  //   "Dumbbell floor press",
  //   "Isometric Neck Exercise - Front And Back",
  //   "Fire Hydrant",
  //   "Neck Bridge Prone",
  //   "Barbell shrug",
  //   "Lateral hop",
  //   "T-Bar Row with Handle",
  //   "Dumbbell farmer's walk",
  //   "Kneeling cable triceps extension",
  //   "Barbell behind-the-back shrug",
  //   "Barbell Hip Thrust",
  //   "Lying Bent Leg Groin",
  //   "Decline reverse crunch",
  //   "Adductor/Groin",
  //   "Barbell Deadlift",
  //   "Barbell glute bridge",
  //   "Barbell Curl",
  //   "Romanian Deadlift from Deficit",
  //   "V-bar pull-up",
  //   "Reverse-grip bent-over row",
  //   "Romanian Deadlift With Dumbbells",
  //   "Barbell back squat to box",
  //   "Weighted donkey calf raise",
  //   "Standing cable low-to-high twist",
  //   "Standing dumbbell shrug",
  //   "Monster Walk",
  //   "Side Lying Groin Stretch",
  //   "Push-press",
  // ]);
  useEffect(() => {
    getExercise().then((exercise) => {
      setExercise(exercise);
    });
  }, []);

  async function getExercise() {
    const url = process.env.REACT_APP_API_URL + "/exercise";
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/exercises";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exerciseName,
        set,
        reps,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  // function myFunction() {
  //   // Declare variables
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementsByClassName("myInput");
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById("myUL");
  //   li = ul.getElementsByTagName("li");

  //   // Loop through all list items, and hide those who don't match the search query
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // }

  let scores = 0;
  for (const exercise2 of exercise) {
    scores = scores + exercise2.Score;
  }
  scores = scores / exercise.length;
  scores = scores.toFixed(2);
  return (
    <div className="main">
      <h1>Rate your exercise</h1>
      <h2>{scores}</h2>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          {/* <input
            type="text"
            className="myInput"
            value={exerciseName}
            onChange={(ev) => setExerciseName(ev.target.value)}
            onKeyUp={"myFunction()"}
            placeholder={"Bench Press"}
          />
          <ul id="myUL">
            {nameArr.map((exerciseN) => (
              <li>
                <a href="#">exerciseN</a>
              </li>
            ))}
          </ul> */}
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
        {exercise.length > 0 &&
          exercise.map((exercise1) => (
            <div className="exercise">
              <div className="left">
                <div className="name"> {exercise1.exerciseName}</div>
                <div className="muscle">{exercise1.MuscleGroup}</div>
              </div>
              <div className="right">
                <div
                  className={
                    "Score " + (exercise1.Score < 0.5 ? "red" : "green")
                  }
                >
                  {exercise1.Score}
                </div>
                <div className="rep_set">
                  {exercise1.reps}, {exercise1.set}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
