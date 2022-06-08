import React, { useEffect , useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [ sushis , setSushis ] = useState([]);
  const [ fourSushis , setFourSushis ] = useState([]);
  const [ plates , setPlates ] = useState([]);
  const [ wallet , setWallet ] = useState(100);

  const API = "http://localhost:3001/sushis";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        setSushis(sushis);
        const fourAtATime = sushis.slice(0, 4);
        setFourSushis(fourAtATime);
      });
  }, []);

  function moreSushi() {
    console.log("four more!")
    const fourMore = sushis.slice(0,4)
    setFourSushis(fourMore)
  }

  function eatSushi(sushiToBeEaten) {
    const price = sushiToBeEaten.price
    if (wallet - price >= 0) {
      const updatedSushis = sushis.filter(sushi => sushi.id !== sushiToBeEaten.id)
      setSushis(updatedSushis)
      setPlates([...plates, sushiToBeEaten]);
      setWallet(wallet - sushiToBeEaten.price);
    }
  };
  

  return (
    <div className="app">
      <SushiContainer sushis={fourSushis} onEatSushi={eatSushi} moreSushi={moreSushi} wallet={wallet}/>
      <Table plates={plates} wallet={wallet}/>
    </div>
  );
}

export default App;
