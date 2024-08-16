import React from "react";

function Controls({ onFeed, onPlay, onSleep, onScold }) {
  return (
    <div className="controls">
      <button onClick={onFeed}>Feed</button>
      <button onClick={onPlay}>Play</button>
      <button onClick={onSleep}>Sleep</button>
      <button onClick={onScold}>Scold</button>
    </div>
  );
}

export default Controls;
