import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Box,  } from "@mui/material"

export default function ListCustom({ children, data }) {
    return (
        <div>
            {data.map(item => (
                <List>
                    <ListItem>
                        <ListItemText primary={item.esper} />
                        <ListItemText primary={item.name} />
                    </ListItem>
                </List>
            ))}
        </div>
    )
}
