import { alpha, Avatar, Badge, Box, Icon, Link, SvgIcon, Typography, useTheme } from '@mui/material';
import { RouterLink } from './router-link';

export const Logo = ({ dark = false, isLinkStatic = false }) => {
  const theme = useTheme();
  const color = dark
    ? theme.palette.common.white
    : theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.common.black;



  const linkProps = isLinkStatic
    ? {
        href: '',
        onClick: (e) => e.preventDefault(),
      }
    : {
        href: '/',
      };
  return (
    <Box
      sx={{
        position: 'relative',
        transition: (theme) => theme.transitions.create(['transform']),
        transform: 'scale(1)',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link
        component={RouterLink}
        {...linkProps}
        sx={{
          color: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover .MuiBadge-badge': {
            opacity: 1,
            visibility: 'initial',
          },
        }}
      >
        <Badge
          sx={{
            '.MuiBadge-badge': {
              opacity: 0,
              transition: (theme) => theme.transitions.create(['opacity', 'visibility']),
              visibility: 'hidden',
              fontSize: theme.typography.pxToRem(10),
              right: -5,
              top: -5,
              fontWeight: 700,
              letterSpacing: '-.45px',
              p: '3px 5px 5px',
              transform: 'scale(.9)',
            },
          }}
          overlap="circular"
          color={dark ? 'success' : 'info'}
          badgeContent="1.0"
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: theme.shape.borderRadius * 2 + 'px',
              border: `2px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(198deg, ${alpha(
                theme.palette.primary.main,
                0.32
              )} 18%, transparent 100%)`,
            }}
          >
            <Avatar alt="Carmax Logo" src='src\img\logo\carmax.png' />
          </Box>
              
        </Badge>
        
    
        

        {/* <Typography
          component="span"
          sx={{
            color:'red',
            fontSize: '13px',
            ml: '-34px',
            mt: '-1px',
            mr: '36px',
            lineHeight: '18px',
          }}
          fontWeight={700}
        >
          CMX
        </Typography> */}

        <Typography
          component="span"
          sx={{
            fontSize: '18px',
            letterSpacing: '-.45px',
            ml: '-23px',
            mt: '-1px',
            lineHeight: '18px',
            paddingLeft: '30px', // 在四个方向上都增加 10px 的内边距
          }}
          fontWeight={500}
        >
          車美仕商品倉儲平台
        </Typography>

        
      </Link>
    </Box>
  );
};
