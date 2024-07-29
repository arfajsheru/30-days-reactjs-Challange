import React from 'react'

const Square = ({value, OnClickTab}) => {
  return (
    <div className="boxes"
    onClick={ OnClickTab }
    >
      <h5>{value}</h5>
    </div>
  )
}

export default Square