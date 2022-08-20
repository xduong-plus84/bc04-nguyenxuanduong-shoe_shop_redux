import React, { Component } from "react";
import { connect } from "react-redux";
import { addAction } from "./redux/actions/addAction";
import { removeAction } from "./redux/actions/removeAction";

class Shoe_Cart extends Component {
  renderShoeInCart = () => {
    return this.props.cart.map((item, index) => {
      return (
        <tr key={index.toString() + item.id}>
          <td>{item.name}</td>
          <td>$ {item.price}</td>
          <td>
            {""}
            <img src={item.image} style={{ width: 80 }} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.hanleAddToCart(item.id, -1);
              }}
              className="btn btn-primary"
            >
              -
            </button>
            <span className="mx-2 text-center"> {item.soLuong}</span>
            <button
              onClick={() => {
                this.props.hanleAddToCart(item.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      //    Cart
      <div
        className="modal fade"
        id="showCart"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Danh sách sản phẩm
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* start body  */}
              <table className="table table-borderless table-hover">
                <tbody>{this.renderShoeInCart()}</tbody>
              </table>

              {/* end body  */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  // lấy dữ liệu về dưới dạng props
  return {
    cart: state.shoeShoptReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  // đẩy dữ liệu lên store
  return {
    hanleAddToCart: (id, value) => {
      dispatch(addAction(id, value));
    },
    handleRemove: (id) => {
      dispatch(removeAction(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shoe_Cart);
// export default Button_Cart;
