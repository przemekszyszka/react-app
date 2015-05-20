import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {RouteHandler} from "react-router";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = location.href.indexOf("recent") != -1 ? {activeKey: 2} : {activeKey: 1}
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-10 col-sm-offset-1'>
          <Nav bsStyle='pills' activeKey={this.state.activeKey} onSelect={this._handleSelect.bind(this)}>
            <NavItem eventKey={1} href='#/popular'>Popular stories</NavItem>
            <NavItem eventKey={2} href='#/recent'>Recent stories</NavItem>
          </Nav>
          <RouteHandler />
        </div>
      </div>
    );
  }

  _handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
    switch (selectedKey) {
      case 1:
        location.href = '#/popular'
        return;
      case 2:
        location.href = '#/recent'
        break;
    }
  }
}

export default Menu;
