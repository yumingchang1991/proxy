import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ComingFeatures from '../data/ComingFeatures'

export default function FeaturesComingTable () {
  const HeaderStyle = {
    backgroundColor: '#E6E6E6',
    fontWeight: 'bold'
  }
  const TSX = ComingFeatures.map(rowItem => (
    <TableRow
      key={rowItem.key}
      hover={true}
      sx={{ '&:last-child td, &:last-child th': { border: 0 },  }}
    >
      <TableCell align="left">{rowItem.group}</TableCell>
      <TableCell align="left">{rowItem.feature}</TableCell>
      <TableCell align="left">{rowItem.progress}</TableCell>
    </TableRow>
  ))

  return (
    <TableContainer sx={{ maxWidth: 800, maxHeight: '50vh', marginInline: 'auto', marginBlock: '1rem' }}>
      <Table stickyHeader aria-label="Coming table">
        <TableHead sx={{ backgroundColor: 'transparent' }}>
          <TableRow>
            <TableCell align="left" sx={HeaderStyle}>Group</TableCell>
            <TableCell align="left" sx={HeaderStyle}>Feature</TableCell>
            <TableCell align="left" sx={HeaderStyle}>Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TSX}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
