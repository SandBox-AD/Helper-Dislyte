import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export default class CardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { children } = this.state;
    return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {children.data.map((_esper) => (
          <Grid item xs={2} sm={4} md={4}>
            <Link href="/test/espers/">
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      width: 'auto',
                    }}
                    component="img"
                    image={_esper.picture}
                    alt={_esper.esper}
                  />
                  <CardContent>
                    <Typography>{_esper.esper}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}
CardGrid.propType = {
  children: PropTypes.shape(),
};
