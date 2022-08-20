import React, { Component } from "react";
import { connect } from "react-redux";

class Button_Cart extends Component {
  render() {
    let sumSoLuong = this.props.cart.reduce(
      (item1, item2) => item1 + item2.soLuong,
      0
    );
    const btn__cart = {
      padding: "10px",
      position: "fixed",
      bottom: "30px",
      right: "30px",
      borderRadius: "50%",
    };
    const iconCart = {
      color: "black",
      backgroundColor: "transparent",
      fontSize: "2rem",
      border: "none",
      "&:hover": {
        color: "green",
      },
    };
    const quantity = {
      color: "black",
      backgroundColor: "rgb(253, 216, 53)",
      lineHeight: "25px",
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      position: "absolute",
      right: "5px",
      top: "5px",
      textAlign: "center",
      userSelect: "none",
    };
    return (
      <div style={btn__cart}>
        <button style={iconCart} data-toggle="modal" data-target="#showCart">
          <i className="fa fa-shopping-cart" />
        </button>
        <span style={quantity} id="total__products">
          {sumSoLuong}
        </span>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoeShoptReducer.cart,
  };
};

export default connect(mapStateToProps, null)(Button_Cart);
// export default Button_Cart;
