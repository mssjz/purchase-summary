import React, { Component } from 'react';
import cx from 'classnames';
import "./Promo.css";
import { connect } from 'react-redux';
import { useDiscount } from '../../actions';

class Promo extends Component{
  constructor(props){
    super(props);
    this.state = {
      display: false,
      text: "",
      error: false
    }
  }

  textChange = e => {
    this.setState({text: e.target.value});
  }

  handleClick = e => {
    if (this.state.text.toUpperCase() === this.props.code){
      this.props.applyDiscount(0.9);
      this.setState({error: false})
    } else {
      this.props.applyDiscount(1);
      this.setState({error: true});
    }
  }

  handleToggle = () => {
    this.setState({display: !this.state.display});
  }

  render(){
    let toggleClasses = cx({
      'Hidden': !this.state.display,
      'Display': this.state.display
    });
    return(
      <div className="Promo">
      <div className="Toggle-promo" onClick={this.handleToggle}>
      {this.state.display ? 
      <div><span className="Text">Hide promo code</span><span className="Sign">-</span></div> 
      : 
      <div><span className="Text">Apply promo code</span><span className="Sign">+</span></div> }
      </div>

      <div className={toggleClasses}>
        <div className="Promo-text">Promo Code</div>
        <input className="Code" type="text" value={this.state.text} onChange={this.textChange}></input>
        <button className="Button" onClick={this.handleClick}>Apply</button>
        <p style={{color: 'red'}}>{this.state.error ? "!Invalid Code" : ""}</p>
      </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.code
  }
}

const mapDispatchToProps = dispatch => {
  return {
    applyDiscount: (num) => dispatch(useDiscount(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Promo);