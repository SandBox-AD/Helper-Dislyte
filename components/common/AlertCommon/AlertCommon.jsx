import { Alert, Box } from '@mui/material';
import React from 'react';

export default class AlertCommon extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { severity, message } = this.state;
    return (
      <Box>
        <Alert severity={severity}>{message}</Alert>
      </Box>
    );
  }
}