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

export default function BasicTable({ etfArray }: {etfArray: etf[]}) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, maxHeight: 300, marginInline: 'auto', marginBlock: '1rem' }}>
      <Table stickyHeader  aria-label="ETF data table">
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
