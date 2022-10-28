import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import FEATURES from '../data/Features'

export default function FeaturesDevelopedTable() {
  const HeaderStyle = {
    backgroundColor: '#E6E6E6',
    fontWeight: 'bold'
  }
  const TSX = FEATURES
    .sort((a, b) => b.key - a.key) // the most recent be on top
    .map(rowItem => (
      <TableRow
        key={rowItem.key}
        hover={true}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="left">{rowItem.group}</TableCell>
        <TableCell align="left">{rowItem.feature}</TableCell>
        <TableCell align="left">{rowItem.completedAt}</TableCell>
      </TableRow>
    ))

  return (
    <TableContainer sx={{ maxWidth: 800, maxHeight: '50vh', marginInline: 'auto', marginBlock: '1rem' }}>
      <Table stickyHeader aria-label="Developed table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={HeaderStyle}>Group</TableCell>
            <TableCell align="left" sx={HeaderStyle}>Feature</TableCell>
            <TableCell align="left" sx={HeaderStyle}>Completed At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TSX}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
