import React, { Component } from 'react';
import { fetchData } from './actions';
import { connect } from "react-redux";
import DisplayItem from './components/DisplayItem';
import Promo from './components/Promo';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getPrice();
    //console.log("test pull and diff in sample-git");
  }
  render() {
    const {subtotal, savings, tax, total, zip} = this.props.pricing;//short name
    let currSubtotal = (subtotal * this.props.discount).toFixed(2);
    let currTax = (currSubtotal * (tax / subtotal)).toFixed(2);
    let currTotal = Number(currSubtotal) + Number(currTax) - savings;
    if (this.props.loading) {
      return <p className="Loading">Loading...</p>
    }
    return (
      <div className="App">
        <div className="Prices">
        <span>Subtotal</span> <span className="Dollors">${currSubtotal}</span>
        </div>
        <p className="Applied">{this.props.discount === 0.9 ? '10% Discount Applied' : ''}</p>
        
        <div className="Prices">
          <div className="Tooltip">
            Pickup savings
            <span className="Tooltip-text">Picking up your order in the store helps cut costs, and we pass the savings on to you</span>
          </div> 
          <span className="Dollors" style={{color: "red"}}>${savings}</span>
        </div>
        
        <div className="Prices">
        <span>Est. taxes & fees</span> <span className="Dollors">${currTax}</span>
        <div>(Based on {zip})</div>
        </div>
        <hr color="#ddd"/>

        <div className="Total">Est. total <span className="Dollors">${currTotal}</span></div>
        <DisplayItem />
        <Promo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pricing: state.pricing,
    discount: state.discount,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPrice: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
