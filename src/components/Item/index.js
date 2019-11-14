import React, { Component } from 'react';
import "./Item.css";
import { connect } from 'react-redux';

class Item extends Component{
  render(){
    const {item_name, quantity, img, price, new_price} = this.props.detail;
    let curr_price = (new_price * this.props.discount).toFixed(2);
    //test another commit in item component
    return(<div className="Item">
      <img className="Image" src={img} alt="Leather Chair Red"/>
      <div class="Info">
        <div>{item_name}</div>
        <div>
          <span className="New-price">${curr_price}</span>
          <span className="Qty">Qty: {quantity}</span>
        </div>
        <div className="Old-price">{price}</div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    detail: state.itemDetail,
    discount: state.discount
  }
}

export default connect(mapStateToProps)(Item);
