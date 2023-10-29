import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import { SearchItem } from './types';

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: null as SearchItem[] | null,
    name: localStorage.getItem('search-value')
      ? localStorage.getItem('search-value')
      : '',
  };

  stateUpdate() {
    fetch(`https://rickandmortyapi.com/api/episode/?name=${this.state.name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  setName(str: string) {
    this.setState({
      name: str,
      isLoaded: false,
    });
  }

  componentDidMount() {
    this.stateUpdate();
  }

  componentDidUpdate() {
    if (!this.state.isLoaded) this.stateUpdate();
    if (this.state.error) throw new Error('Click to error button 🪤');
  }

  handleClickError() {
    this.setState({ error: true });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Rick and Morty</h1>
        <button onClick={this.handleClickError.bind(this)}>Error</button>
        <SearchInput setName={this.setName.bind(this)} />
        {!this.state.isLoaded ? (
          <div>LOADING</div>
        ) : (
          <SearchResults items={this.state.items} />
        )}
      </div>
    );
  }
}

export default App;
