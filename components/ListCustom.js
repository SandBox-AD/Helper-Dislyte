import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from '@mui/material'

export default function ListCustom({ children, data }) {
  return (
    <List>
      {data.data.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.esper} />
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  )
}
