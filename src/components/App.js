import React, { useEffect , useState } from "react";
import AddMoneyForm from "./AddMoneyForm";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [ sushis , setSushis ] = useState([]);
  const [ fourSushis , setFourSushis ] = useState([]);
  const [ plates , setPlates ] = useState([]);
  const [ wallet , setWallet ] = useState(100);

  console.log(sushis)

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

  function addMoneyToWallet(e) {
    e.preventDefault()
    setWallet(wallet + parseInt(e.target[0].value))
    e.target.reset()
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} fourSushis={fourSushis} onEatSushi={eatSushi} moreSushi={moreSushi} wallet={wallet}/>
      <Table plates={plates} wallet={wallet}/>
      <AddMoneyForm onAddMoney={addMoneyToWallet}/>
    </div>
  );
}

export default App;
