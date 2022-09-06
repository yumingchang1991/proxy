import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import GitHubIcon from '@mui/icons-material/GitHub'
import ListItemText from '@mui/material/ListItemText'

interface reference {
  link: string,
  displayText: string
}

function createReference(displayText: string, link: string): reference {
  return { displayText, link }
}

const REFERENCES: reference[] = [
  createReference('Frontend Repo', 'https://github.com/yumingchang1991/proxy-frontend'),
  createReference('Backend Repo', 'https://github.com/yumingchang1991/proxy-backend')
]

export default function FeaturesReferenceLink() {
  const TSX = REFERENCES.map((item: reference) => (
    <ListItem disablePadding>
      <ListItemButton component='a' href={item.link}>
        <ListItemIcon>
          <GitHubIcon />
        </ListItemIcon>
        <ListItemText primary={item.displayText} />
      </ListItemButton>
    </ListItem>
  ))

  return (
    <List>
      {TSX}
    </List>
  )
}