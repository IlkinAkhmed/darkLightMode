import React from 'react'
import style  from "./index.module.css";

const Card = () => {
    const mystyle = {
        textDecoration:"underline"
    }
  return (
    <div className={`${style.card} ${mystyle}`} style={mystyle}>
        <p >React</p>
    </div>
  )
}

export default Card