import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStockToPortfolio }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return (<Stock 
          key={stock.id} 
          stock={stock} 
          addStockToPortfolio={addStockToPortfolio}
        />)
      })}
    </div>
  );
}

export default StockContainer;
