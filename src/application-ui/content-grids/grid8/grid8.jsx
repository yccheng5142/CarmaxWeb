import { Unstable_Grid2 as Grid } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Grid
      container
      spacing={{
        xs: 2,
        sm: 3,
      }}
    >
      <Grid
        lg={6}
        xs={12}
        container
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        <Grid
          sm={6}
          md={3}
          lg={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="1"
          />
        </Grid>
        <Grid
          sm={6}
          md={3}
          lg={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="2"
          />
        </Grid>
        <Grid
          sm={6}
          md={3}
          lg={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="3"
          />
        </Grid>
        <Grid
          sm={6}
          md={3}
          lg={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="4"
          />
        </Grid>
      </Grid>
      <Grid
        lg={6}
        xs={12}
      >
        <PlaceholderBox
          height={128}
          title="5"
        />
      </Grid>
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="6"
        />
      </Grid>
      <Grid
        md={6}
        xs={12}
      >
        <PlaceholderBox
          height={128}
          title="7"
        />
      </Grid>
      <Grid
        md={6}
        xs={12}
      >
        <PlaceholderBox
          height={128}
          title="8"
        />
      </Grid>
      <Grid
        md={6}
        xs={12}
      >
        <PlaceholderBox
          height={128}
          title="9"
        />
      </Grid>
      <Grid
        md={6}
        xs={12}
        container
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        <Grid
          sm={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="10"
          />
        </Grid>
        <Grid
          sm={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="11"
          />
        </Grid>
        <Grid
          sm={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="12"
          />
        </Grid>
        <Grid
          sm={6}
          xs={12}
        >
          <PlaceholderBox
            height={128}
            title="13"
          />
        </Grid>
      </Grid>
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="14"
        />
      </Grid>
    </Grid>
  );
};
export default Component;
