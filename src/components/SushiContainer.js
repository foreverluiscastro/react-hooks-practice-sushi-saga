import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushis , onEatSushi , moreSushi , wallet }) {

  const fourSushis = sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} wallet={wallet}></Sushi>)

  return (
    <div className="belt">
      {fourSushis}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
