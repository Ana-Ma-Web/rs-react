import React, { ChangeEvent, Component, KeyboardEvent } from 'react';

export default class SearchInput extends Component<{
  setName: (str: string) => void;
}> {
  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({
      value: localStorage.getItem('search-value')
        ? localStorage.getItem('search-value')
        : '',
    });
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: e.target.value ? e.target.value : '',
    });
  }

  handleSubmit() {
    this.props.setName(this.state.value);
    localStorage.setItem('search-value', this.state.value);
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className="search">
        <input
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
        />
        <button onClick={this.handleSubmit.bind(this)}>Search</button>
      </div>
    );
  }
}
