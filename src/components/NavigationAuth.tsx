import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Box, IconButton, Menu, MenuItem, Avatar, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useAuth from '../hooks/useAuth'
import { axiosPrivate } from '../config/axios'
const pages = ['Features']
const settings = ['Logout']

export default function NavigationAuth() {
  const navigate = useNavigate()
  const { auth, setAuth } = useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogOut = async () => {
    const LOGOUT_ENDPOINT = '/api/auth/logout'
    const axiosRes = await axiosPrivate.get(LOGOUT_ENDPOINT)
    if (axiosRes.data.status === 'success') {
      setAuth({ username: '', account: '', accessToken: '' })
      navigate('/proxy-frontend/login')
    }
  }
  
  return (
    <>
      

      <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{ color: "#252525" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Link
                to={`/proxy-frontend/${page}`}
                style={{
                  textDecoration: 'none',
                  color: '#252525'
                }}>
                {page}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1
      }}>
      <Link to="/proxy-frontend" style={{ textDecoration: 'none', color: '#252525', flexGrow: 1 }}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
        >
          My Portfolio
        </Typography>
      </Link>
      </Typography>

      <Link to="/proxy-frontend" style={{ textDecoration: 'none', color: '#252525' }}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 'bold'
          }}
        >
          My Portfolio
        </Typography>
      </Link>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Link
              to={`/proxy-frontend/${page}`}
              style={{ color: '#252525', textDecoration: 'none' }}
            >
              <Typography textAlign="center">
                {page}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Box>
      {/* top-right user icon menu */}
      <Box sx={{ flexGrow: 0 }}>
        {!auth?.accessToken
          ? ''
          : <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={auth?.username} src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogOut}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        }

      </Box>
    </>
  )
}