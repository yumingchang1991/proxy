import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function BasicTextFields() {
  return (
    <Box
      component='div'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField id="standard-basic" label="ETF Symbol" name="symbol" defaultValue="VTI" variant="standard" required={true} />
    </Box>
  )
}