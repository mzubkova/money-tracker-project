import React, { Component } from "react";
import Balance from "./components/balance/balance";
import Header from "./components/header/header";
import HeaderLogo from "./components/header/header-logo";
import Table from "./components/table/table";

export default class Categories extends Component {
  render() {
    return (
      <div>
        <div className="categories-inner">
          <div className="header">
            <div className="container">
              <HeaderLogo title="MoneyTracker" />
              <Header />
            </div>
          </div>
          <div className="categories-content">
            <Balance />
            <Table />
          </div>
        </div>
      </div>
    );
  }
}
