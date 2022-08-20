import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface etf {
  symbol: string,
  close: number,
  date: string,
  dividend: number
}

function createData(
  symbol: string,
  close: number,
  date: string,
  dividend: number
) {
  return { symbol, close, date, dividend }
}

const rows = [
  createData('AABC', 159, new Date().toLocaleDateString(), 24),
  createData('VTI', 237, new Date().toLocaleDateString(), 37),
  createData('BND', 262, new Date().toLocaleDateString(), 24),
  createData('EIED', 305, new Date().toLocaleDateString(), 67),
  createData('BNDG', 356, new Date().toLocaleDateString(), 49),
]

export default function BasicTable({ etfArray }: any[any]) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, maxHeight: 300, marginInline: 'auto', marginBlock: '1rem' }}>
      <Table stickyHeader  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Close&nbsp;($)</TableCell>
            <TableCell align="right">Dividend&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {etfArray.map((etf: etf) => (
            <TableRow
              key={etf.symbol}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{etf.date}</TableCell>
              <TableCell align="right">{etf.symbol}</TableCell>
              <TableCell align="right">{etf.close}</TableCell>
              <TableCell align="right">{etf.dividend}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
