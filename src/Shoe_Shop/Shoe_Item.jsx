import React, { Component } from "react";
import Shoe_Detail from "./Shoe_Detail";
import { connect } from "react-redux";
import { detailAction } from "./redux/actions/detailAction";

class Shoe_Item extends Component {
  render() {
    return (
      <>
        {/* Button trigger modal */}
        <div className="container">
          <div className="row row-cols-3">
            {this.props.shoeList.map((item, index) => {
              return (
                <div key={index} className="col mb-4">
                  <div className="card h-100">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p>{item.price}$</p>
                      <p className="card-text">{item.shortDescription}</p>
                      <button
                        className="btn btn-success mr-2"
                        onClick={() => {
                          this.props.hanleAddToCart(item.id, 1);
                        }}
                      >
                        Add to Cart
                      </button>
                      <a
                        href="#"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={() => {
                          this.props.handleShowDetail(item.id);
                        }}
                      >
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal  */}
        <Shoe_Detail />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  // lấy dữ liệu về dưới dạng props
  return {
    shoeList: state.shoeListReducer.shoeList,
  };
};

let mapDispatchToProps = (dispatch) => {
  // đẩy dữ liệu lên store
  return {
    handleShowDetail: (id) => {
      dispatch(detailAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shoe_Item);
// export default connect(mapStateToProps, null)(Shoe_Item);
