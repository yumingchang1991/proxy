import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode,
  index: number,
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Features () {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <main className="App-header">
      <h1>Features</h1>
      <Box sx={{ width: '100%', maxWidth: '800px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} >
            <Tab label="Developed" {...a11yProps(0)} />
            <Tab label="What's Coming" {...a11yProps(1)} />
            <Tab label="Reference Link" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          basic API call & simple UI
        </TabPanel>
        <TabPanel value={value} index={1}>
          Export data as CSV
        </TabPanel>
        <TabPanel value={value} index={2}>
          <a href='https://github.com/yumingchang1991/proxy-frontend'>Frontend Repo</a>
          <br />
          <a href='https://github.com/yumingchang1991/proxy-backend-heroku'>Backend Repo</a>
        </TabPanel>
      </Box>
    </main>
  )
}
