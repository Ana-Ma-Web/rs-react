import React, { ChangeEvent, Component } from 'react';

export default class SearchInput extends Component {
  state = {
    value: '...',
    name: '...',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      name: this.state.value,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.name}</div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleButtonClick}>Click</button>
      </>
    );
  }
}
