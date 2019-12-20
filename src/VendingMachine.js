import React, { Component } from "react";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <h1>Vending Machine</h1>
      </div>
    );
  }
}

export default VendingMachine;
