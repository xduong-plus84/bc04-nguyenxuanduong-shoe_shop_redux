import React, { Component } from "react";
import styles from "./shoeItemDetail_style.module.css";
import { connect } from "react-redux";
import { addAction } from "./redux/actions/addAction";

class Shoe_Detail extends Component {
  render() {
    let { id, name, image, price, description } = this.props.shoeDetail;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* body modal start */}
            <div className="modal-body container mt-5">
              <div className="row">
                <div className="col-5" id="img">
                  <img src={image} className={`${styles.shoe__img}`} />
                </div>
                <div className="col-7 text-left">
                  <h2>{name}</h2>
                  <table className="table">
                    <thead />
                    <tbody>
                      <tr>
                        <th scope="row">Price</th>
                        <td>{price}</td>
                      </tr>
                      <tr>
                        <th scope="row">Description</th>
                        <td>{description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* body modal end */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#showCart"
                data-dismiss="modal"
              >
                Xem giỏ hàng
              </button>
              <button
                onClick={() => {
                  this.props.hanleAddToCart(id, 1);
                }}
                type="button"
                className="btn btn-primary"
              >
                Thêm vào giỏ hàng
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
    shoeDetail: state.shoeShoptReducer.shoeDetail,
  };
};

let mapDispatchToProps = (dispatch) => {
  // đẩy dữ liệu lên store
  return {
    hanleAddToCart: (id, value) => {
      dispatch(addAction(id, value));
    },
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Shoe_Detail);
export default connect(mapStateToProps, mapDispatchToProps)(Shoe_Detail);
