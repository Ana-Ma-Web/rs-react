import React, { ChangeEvent, Component } from 'react';

export default class SearchInput extends Component<{
  setName: (str: string) => void;
}> {
  state = {
    value: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.props.setName(this.state.value);
  };

  render() {
    return (
      <>
        <input onChange={this.handleChange} />
        <button onClick={this.handleButtonClick}>Search</button>
      </>
    );
  }
}
