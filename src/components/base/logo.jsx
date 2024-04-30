import { alpha, Avatar, Badge, Box, Icon, Link, SvgIcon, Typography, useTheme } from '@mui/material';
import { RouterLink } from './router-link';
import carmaxLogo from 'src/img/logo/carmax.png'
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
              pointerEvents: 'none', // 禁用鼠标事件
            },
          }}
          overlap="circular"
          color={dark ? 'success' : 'info'}
          
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // borderRadius: theme.shape.borderRadius * 2 + 'px',
              // border: `2px solid ${theme.palette.primary.main}`,
              // background: `linear-gradient(198deg, ${alpha(
              //   // theme.palette.primary.main,
              //   0.32
              // )} 18%, transparent 100%)`,

            }}
          >
            <Avatar alt="Carmax Logo" src={carmaxLogo}
              sx={{
                width: 80, // 设置图像宽度
                height: 80, // 设置图像高度
              }}
            />

          </Box>

          <Typography
            component="span"
            sx={{
              fontSize: '16px',
              letterSpacing: '-.45px',
              ml: '-49px',
              mt: '34px',
              lineHeight: '20px',
              paddingLeft: '50px', // 在四个方向上都增加 10px 的内边距
              
            }}
            fontWeight={500}
          >
            車美仕商品倉儲平台
          </Typography>

        </Badge>


      </Link>
    </Box>
  );
};
