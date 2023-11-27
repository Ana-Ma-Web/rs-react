// import { SerializedError } from '@reduxjs/toolkit';
// import { FetchBaseQueryError, QueryStatus } from '@reduxjs/toolkit/query';
import React from 'react';

export default function Info() {
  //   props: {
  //   status: QueryStatus;
  //   error?: FetchBaseQueryError | SerializedError | undefined;
  // }
  return (
    <>
      {/* {props.status === 'rejected' ? (
        <div>NOT FOUND</div>
      ) : ( */}
      <>
        <div className="info__loading-text">LOADING</div>
        <div className="info__loading-img">
          <div>💮</div>
        </div>
      </>
      {/* )}
      {props.error &&
        'status' in props.error &&
        props.error?.status === 429 && <div>Too Many Requests</div>} */}
    </>
  );
}
