import React, { Component } from 'react';
import Item from '../Item';
import cx from 'classnames';
import './DisplayItem.css';

class DisplayItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      display: false
    }
  }

  handleToggle = () => {
    this.setState({display: !this.state.display});
  }

  render(){
    //use classnames class
    let toggleClasses = cx({
      'Hidden': !this.state.display,
      'Display': this.state.display
    });
    return(<div className="Item-detail">
      <div className="Toggle-item" onClick={this.handleToggle}>
      {this.state.display ? 
      <div><span className="Text">Hide item details</span><span className="Sign">-</span></div> 
      : 
      <div><span className="Text">See item details</span><span className="Sign">+</span></div> }
      </div>

      <div className={toggleClasses}>
        <Item />
      </div>
      <hr color="#ddd"/>
    </div>);
  }
}

export default DisplayItem;
