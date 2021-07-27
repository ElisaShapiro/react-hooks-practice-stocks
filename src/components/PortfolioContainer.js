import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myPortfolio, removeStockFromPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolio.map((stock) => {
        return (<Stock 
          key={stock.id} 
          stock={stock} 
          removeStockFromPortfolio={removeStockFromPortfolio}
        />)
      })}
    </div>
  );
}

export default PortfolioContainer;
