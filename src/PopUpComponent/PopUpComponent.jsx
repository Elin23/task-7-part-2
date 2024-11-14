import React from 'react'
import './PopUpComponent.css'
export default function PopUpComponent({event}) {
  return (
    <>
      <div className="popup">
        <h1>{event}</h1>
      </div>
    </>
  )
}
