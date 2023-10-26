import React, { Component } from 'react';
import { SearchItem } from '../types';

export default class SearchResults extends Component<{
  items: SearchItem[] | null;
}> {
  render() {
    return (
      <div className="results">
        {this.props.items === null || this.props.items === undefined ? (
          <div>NOT FOUND</div>
        ) : (
          this.props.items.map((e) => (
            <div className="card" key={e.url}>
              <div className="card__name">{e.name}</div>
              <div className="card__description">
                <div className="card__date">Date: {e.air_date}</div>
                <div className="card__episode">Episode: {e.episode}</div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}
