import React, { useState } from "react";
import Pet from "./components/Pet";
import Stats from "./components/Stats";
import Controls from "./components/Controls";

function App() {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [sadness, setSadness] = useState(0); // Track sadness
  const [mood, setMood] = useState("neutral");

  const handleFeed = () => {
    setHunger(hunger - 10);
    setHappiness(happiness + 5);
    setSadness(Math.max(0, sadness - 10)); // Decrease sadness
    setMood("happy");
  };

  const handlePlay = () => {
    setHappiness(happiness + 10);
    setEnergy(energy - 10);
    setSadness(Math.max(0, sadness - 5)); // Decrease sadness
    setMood("excited");
  };

  const handleSleep = () => {
    setEnergy(energy + 20);
    setMood("sleepy");
  };

  const handleScold = () => {
    setHappiness(Math.max(0, happiness - 30)); // Decrease happiness
    setEnergy(Math.max(0, energy - 10));
    setSadness(Math.min(100, sadness + 20)); // Increase sadness
    if (happiness < 40) {
      setMood("sad");
    }
  };

  return (
    <div className="App">
      <h1>Virtual Pet Game</h1>
      <Pet mood={mood} sadness={sadness} /> {/* Pass sadness to Pet */}
      <Stats
        hunger={hunger}
        happiness={happiness}
        energy={energy}
        sadness={sadness}
      />{" "}
      {/* Pass sadness to Stats */}
      <Controls
        onFeed={handleFeed}
        onPlay={handlePlay}
        onSleep={handleSleep}
        onScold={handleScold}
      />{" "}
      {/* Add onScold handler */}
    </div>
  );
}

export default App;
