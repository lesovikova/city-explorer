import React from 'react'
import './TableCell.css'

export default function TableCell({text}) {
  return (
    <div className='table-cell'>
      <p className='table-cell__text'>{text}</p>
    </div>
  )
}
