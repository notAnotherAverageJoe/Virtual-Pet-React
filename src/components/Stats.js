import React from "react";

function Stats({ hunger, happiness, energy, sadness }) {
  return (
    <div className="Stats">
      <p>Hunger: {hunger}</p>
      <p>Happiness: {happiness}</p>
      <p>Energy: {energy}</p>
      <p>Sadness: {sadness}</p>
    </div>
  );
}

export default Stats;
