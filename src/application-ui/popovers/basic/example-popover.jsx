import { Popover } from '@mui/material';
import PropTypes from 'prop-types';
import ListWithActions from 'src/components/application-ui/horizontal-lists/horizontal-numbers/list-with-actions';

export const ExamplePopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={
        props.anchorOrigin || {
          vertical: 'top',
          horizontal: 'right',
        }
      }
      transformOrigin={
        props.transformOrigin || {
          vertical: 'top',
          horizontal: 'right',
        }
      }
      disableScrollLock
      onClose={onClose}
      open={!!open}
      {...other}
      slotProps={{
        paper: {
          sx: {
            width: 480,
          },
        },
      }}
    >
      <ListWithActions />
    </Popover>
  );
};
ExamplePopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
