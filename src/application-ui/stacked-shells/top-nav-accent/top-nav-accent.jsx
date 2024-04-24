import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { HEADER_HEIGHT } from 'src/theme/utils';
import { Header } from './header';
import { TopBar } from './top-bar';

export const StackedShellsTopNavAccent = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();
  return (
    <>
      <TopBar />
      <Box
        flex={1}
        overflow="hidden"
        sx={{
          pt: `${HEADER_HEIGHT}px`,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          flex={1}
          sx={{
            backgroundColor: 'background.default',
            position: 'relative',
            zIndex: 1,
            minHeight: '100%',
          }}
        >
          <Header
            onClose={mobileNav.handleClose}
            open={mobileNav.open}
            onOpen={mobileNav.handleOpen}
            menuItems={menuItems}
          />
          {children}
        </Box>
      </Box>
    </>
  );
};
StackedShellsTopNavAccent.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};
