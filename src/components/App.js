import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  const [myPortfolio, setMyPortfolio] = useState([])
  const [sortPattern, setSortPattern] = useState("")
  const [filteredBy, setFilteredBy] = useState("All")
  
  useEffect(() =>
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => setStocks(data))
  )
  
  function addStockToPortfolio(stock){
    console.log(myPortfolio)
    setMyPortfolio([...myPortfolio, stock])
  }
  function removeStockFromPortfolio(id){
    let tempPortfolio = myPortfolio.filter((stock) => {
      if (stock.id !== id)
        return true
    })
    setMyPortfolio(tempPortfolio)
  }
  
  let filteredStocks = stocks.sort((a,b) => {
    if (sortPattern === "Alphabetically") {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      }
    } else if (sortPattern === "Price") {
      return a.price - b.price
    } else {
      return 0
    }
  }).filter((stock) => {
    if (filteredBy === "All") {
      return true
    } else if (filteredBy === stock.type) {
      return true
    }
  })

  return (
    <div>
      <Header />
      <MainContainer 
        stocks={filteredStocks} 
        myPortfolio={myPortfolio} 
        addStockToPortfolio={addStockToPortfolio} removeStockFromPortfolio={removeStockFromPortfolio} setSortPattern={setSortPattern} 
        setFilteredBy={setFilteredBy}/>
    </div>
  );
}

export default App;
