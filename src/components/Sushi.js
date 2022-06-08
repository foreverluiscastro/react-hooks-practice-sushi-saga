import React, { useState } from "react";

function Sushi({ sushi , onEatSushi , wallet }) {
  const [ isEaten , setIsEaten ] = useState(false)

  const { name , img_url , price } = sushi

  function handleClick() {
    if (wallet - price >= 0) {
      setIsEaten(true)
      onEatSushi(sushi)
    }
    return null
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
