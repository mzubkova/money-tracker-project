import React, { Component } from "react";
import "./balance.css";

export default class Balance extends Component {
  render() {
    return (
      <div className="categories-content__balance">
        <h2 className="categories-content__balance-title">Balance</h2>
        <div className="categories-content__balance-sum">$2,652.07</div>
        <button className="categories-content__balance-button">Add more</button>
      </div>
    );
  }
}
