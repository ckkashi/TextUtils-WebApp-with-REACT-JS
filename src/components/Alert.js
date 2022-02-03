import React from 'react'


export default function Alert(props) {
    console.log(props.alert);
  return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible my-2 mx-5 fade show`} role="alert">
    <strong>{props.alert.type}</strong> {props.alert.msg}
  </div>
  )
}
