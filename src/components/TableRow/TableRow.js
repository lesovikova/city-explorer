import React from 'react'
import './TableRow.css'
import TableCell from '../tableCell/TableCell';

export default function TableRow({number, date, sunrise, tempreture, sunset, pressure, wind, snow, humidity, clouds, marker, comments}) {

  return (
    <div className='table-row' >
        <TableCell text={number}/>
        <TableCell text={date}/>
        <TableCell text={tempreture}/>
        <TableCell text={wind}/>
        <TableCell text={pressure}/>
        <TableCell text={clouds}/>
        <TableCell text={humidity}/>
        <TableCell text={snow}/>
        <TableCell text={sunrise}/>
        <TableCell text={sunset}/>
       { marker && <TableCell text={comments} />}
    </div>
  )
}
