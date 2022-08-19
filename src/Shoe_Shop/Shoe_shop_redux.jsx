import React, { Component } from "react";
import Button_Cart from "./Button_Cart";
import Shoe_Cart from "./Shoe_Cart";
import Shoe_List from "./Shoe_List";

export default class Shoe_shop_redux extends Component {
  render() {
    return (
      <div>
        <h1>ShoesStore</h1>
        <Shoe_List />
        <Button_Cart />
        <Shoe_Cart />
      </div>
    );
  }
}
