import * as React from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

interface WraperProps {
  eventHandler: React.MouseEventHandler
}

export default function IconLabelButtons({ eventHandler }:WraperProps) {
  return (
    <Stack direction="column" spacing={2}>
      <Button variant="contained" endIcon={<SendIcon />}
        onClick={eventHandler}>
        Get Price
      </Button>
    </Stack>
  )
}
