import React, { ChangeEvent, Component } from 'react';

export default class SearchInput extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [{ name: '', url: '0' }],
    pageNumber: 1,
    name: '...',
    value: '...',
  };

  stateUpdate() {
    fetch(
      `https://pokeapi.co/api/v2/berry/?limit=10&offset=${
        (this.state.pageNumber - 1) * 10
      }`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.stateUpdate();
  }

  componentDidUpdate() {
    if (!this.state.isLoaded) this.stateUpdate();
  }

  componentWillUnmount() {}

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      pageNumber: this.state.value,
      isLoaded: false,
    });
  };

  render() {
    return (
      <>
        <input onChange={this.handleChange} />
        <button onClick={this.handleButtonClick}>Click</button>
        <div>{this.state.error ? 'Error' : ''}</div>
        {!this.state.isLoaded ? (
          <div>LOADING</div>
        ) : (
          this.state.items.map((e) => <div key={e.url}>{e.name}</div>)
        )}
      </>
    );
  }
}
