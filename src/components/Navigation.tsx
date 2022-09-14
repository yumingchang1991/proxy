import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import useAuth from '../hooks/useAuth'
import NavigationAuth from './NavigationAuth'

export default function Navigation() {
  const { auth } = useAuth()

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#E6E6E6', boxShadow: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          { auth?.accessToken
            ? <NavigationAuth />
            : <Typography sx={{ color: '#252525', marginInline: 'auto', marginBlock: '1rem'}}>
              ETF Tracker</Typography>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}
