import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useSidebarContext } from 'src/contexts/sidebar-context';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { HEADER_HEIGHT, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';
import { Header } from './header';
import { Sidebar } from './sidebar';

export const VerticalShellsDark = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();
  const { isSidebarCollapsed } = useSidebarContext();
  return (
    <>
      <Sidebar
        menuItems={menuItems}
        onClose={mobileNav.handleClose}
        open={mobileNav.open}
        onOpen={mobileNav.handleOpen}
      />
      <Box
        flex={1}
        overflow="hidden"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: `${HEADER_HEIGHT * 1.5}px`,
          ml: {
            xs: 0,
            lg: isSidebarCollapsed && `${SIDEBAR_WIDTH_COLLAPSED}px`,
          },
        }}
      >
        <Header onMobileNav={mobileNav.handleOpen} />
        {children}
      </Box>
    </>
  );
};
VerticalShellsDark.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};
