import React from "react";

export default function Alerts(props) {
  // const

  return (
    <div style={{height: '40px'}}>
      {props.alert && (
        <div
          class="alert alert-success"
          style={{ display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            height: '25px' ,
            width: '100%',
            fontSize: '15px'}}
          role="alert"
        >
          {props.alert.message}
        </div>
      )}
    </div>
  );
}
