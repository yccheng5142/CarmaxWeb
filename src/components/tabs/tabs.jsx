import { alpha, Card, Stack, useMediaQuery } from '@mui/material';
import Menu from './menu';
import { MenuMobile } from './menu-mobile';

const Component = (props) => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Stack
      pb={{
        xs: 0,
        md: 0,
      }}
      justifyContent="space-around"
      spacing={{
        xs: 2,
        sm: 3,
      }}
      alignItems="center"
      direction={{
        xs: 'column',
        sm: 'row',
      }}
    >
      <Card
        elevation={0}
        variant="outlined"
        alignItems="center"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.400'),
          
          pt: 2,
          px: 2,
          pb: {
            xs: 0,
            md: 0,
          },
          
          overflow: 'visible',
          width: {
            xs:'100%',
            sm:'100%'},
          // margin: 'auto', // 将卡片水平居中
        }}
      >
        <Menu   {...props} />
        {/* {mdUp ? <Menu  onTabChange={onTabChange} /> : <MenuMobile />} */}
      </Card>
    </Stack>
  );
};
export default Component;
