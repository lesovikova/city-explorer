import React from 'react'
import './TableHead.css'
import TableHeadCell from '../TableHeadCell/TableHeadCell'

export default function TableHead({marker}) {
  return (
    <div className='table-head'>
        <TableHeadCell text={'#'} />
        <TableHeadCell text={'Date'} />
        <TableHeadCell text={'Temperature'} />
        <TableHeadCell text={'Wind Speed'} />
        <TableHeadCell text={'Pressure'} />
        <TableHeadCell text={'Clouds'} />
        <TableHeadCell text={'Humidity'} />
        <TableHeadCell text={'Snow'} />
        <TableHeadCell text={'Sunrise'} />
        <TableHeadCell text={'Sunset'} />
       { marker && <TableHeadCell text={'Comments'} />}
    </div>
  )
}