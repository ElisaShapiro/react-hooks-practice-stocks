import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, myPortfolio, addStockToPortfolio, removeStockFromPortfolio, setSortPattern, setFilteredBy }) {
  return (
    <div>
      <SearchBar setSortPattern={setSortPattern} setFilteredBy={setFilteredBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStockToPortfolio={addStockToPortfolio} />
        </div>
        <div className="col-4">
          {myPortfolio.length > 0 ? <PortfolioContainer myPortfolio={myPortfolio} removeStockFromPortfolio={removeStockFromPortfolio}/> : null}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
