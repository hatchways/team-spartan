import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Unauthorized = (): JSX.Element => {
  return (
    <Grid>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Grid>
  );
};
