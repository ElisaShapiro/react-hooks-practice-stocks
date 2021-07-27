import React from "react";

function Stock({ stock, addStockToPortfolio, removeStockFromPortfolio }) {
  function onAddStock(){
    addStockToPortfolio(stock)
  }
  function onRemoveStock(){
    removeStockFromPortfolio(stock.id)
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
      {addStockToPortfolio ? (<button onClick={onAddStock}>Buy Stock</button>) :
      (<button onClick={onRemoveStock}>Sell Stock</button>) }
    </div>
  );
}
export default Stock;
