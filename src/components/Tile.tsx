import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../models/IUser';

export default function Tile(props: {
  data: IUser;
  type: 'controlled' | 'uncontrolled';
}) {
  return (
    <>
      <div className="tile">
        <h2 className="tile__title">{props.type}</h2>
        <Link to={`/${props.type}`}>To {props.type} form</Link>
        <div className="tile__content">
          <div className="tile__row">
            <div>name:</div>
            <div>{props.data.name}</div>
          </div>
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
        </div>
      </div>
    </>
  );
}
