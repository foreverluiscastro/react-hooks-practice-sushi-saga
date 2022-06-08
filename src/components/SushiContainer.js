import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushis , fourSushis , onEatSushi , moreSushi , wallet }) {

  const renderSushis = fourSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} wallet={wallet}></Sushi>)

  return (
    <div className="belt">
      {renderSushis}
      <MoreButton moreSushi={moreSushi} sushis={sushis}/>
    </div>
  );
}

export default SushiContainer;
