import React, { Component } from 'react';
import { SearchItem } from '../types';

export default class SearchResults extends Component<{
  isLoaded: boolean;
  items: SearchItem[] | null;
}> {
  render() {
    return (
      <>
        {this.props.items === null || this.props.items === undefined ? (
          <div>NO RESULTS</div>
        ) : (
          this.props.items.map((e) => <div key={e.url}>{e.name}</div>)
        )}
      </>
    );
  }
}
