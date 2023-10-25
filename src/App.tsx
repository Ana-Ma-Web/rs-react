import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import { SearchItem } from './types';

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: null as SearchItem[] | null,
    name: '',
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

  setName(str: string) {
    this.setState({
      name: str,
      isLoaded: false,
    });
    console.log('setName', this.state);
  }

  componentDidMount() {
    this.stateUpdate();
  }

  componentDidUpdate() {
    if (!this.state.isLoaded) this.stateUpdate();
  }

  render() {
    return (
      <>
        <SearchInput setName={this.setName.bind(this)} />
        {!this.state.isLoaded ? (
          <div>LOADING</div>
        ) : (
          <SearchResults
            items={this.state.items}
            isLoaded={this.state.isLoaded}
          />
        )}
      </>
    );
  }
}

export default App;
