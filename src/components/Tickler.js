import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return <button onclick={tickle}>tickle me!</button>
}

export default Tickler;
