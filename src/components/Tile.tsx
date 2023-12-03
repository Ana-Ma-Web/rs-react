import React from 'react';
import { IUser } from '../models/IUser';

export default function Tile(props: { data: IUser }) {
  return (
    <>
      <div className="tile">
        <div className="tile__content">
          <div className="tile__row">
            <div>name:</div>
            <div>{props.data.name}</div>
          </div>
          <div className="tile__row">
            <div>age:</div>
            <div>{props.data.age}</div>
          </div>
          <div className="tile__row">
            <div>country:</div>
            <div>{props.data.country}</div>
          </div>
          <div className="tile__row">
            <div>email:</div>
            <div>{props.data.email}</div>
          </div>
          <div className="tile__row">
            <div>gender:</div>
            <div>{props.data.gender}</div>
          </div>
          <img src={props.data.imgBase64} />
        </div>
      </div>
    </>
  );
}
