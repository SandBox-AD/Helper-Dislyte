import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function list(api) {
  return (
    <List>
      {api.data.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.esper} />
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default class ListCustom extends React.Component {

  render() {
    return list(this.props)
  }
}

ListCustom.propType = {
  api: PropTypes.arrayOf(PropTypes.shape),
};
