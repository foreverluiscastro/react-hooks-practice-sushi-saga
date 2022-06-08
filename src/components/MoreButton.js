import React from "react";

function MoreButton({ moreSushi , sushis }) {

  function startOver() {
    window.location.reload(false);
  }

  const button = (sushis.length > 0 ? <button onClick={() => moreSushi()}>More sushi!</button> : <button onClick={() => startOver()}>All out of sushi! Start Over?</button>)

  return (
    <>
    {button}
    </>
  )
  
}

export default MoreButton;
