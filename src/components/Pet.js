import React from "react";
import "./Pet.css";

function Pet({ mood, sadness }) {
  return (
    <div className="pet">
      <h2>Pet Mood: {mood}</h2>
      <p>Sadness Level: {sadness}</p>
      {mood === "sad" ? (
        <img src={`/assets/pet-sad.gif`} alt="Virtual Pet" />
      ) : (
        <img src={`/assets/pet-${mood}.gif`} alt="Virtual Pet" />
      )}
    </div>
  );
}

export default Pet;
