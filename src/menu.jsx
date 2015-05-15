import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: 1};
  }

  render() {
    return (
      <Nav bsStyle='pills' activeKey={this.state.activeKey} onSelect={this._handleSelect.bind(this)}>
        <NavItem eventKey={1} href='/home'>Popular</NavItem>
        <NavItem eventKey={2} href='/home'>Recent</NavItem>
      </Nav>
    );
  }

  _handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }
}

export default Menu;
