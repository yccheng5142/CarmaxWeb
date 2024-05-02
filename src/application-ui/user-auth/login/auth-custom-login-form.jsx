import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React, {lazy, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { RouterLink } from 'src/components/base/router-link';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';
import { authClient } from 'src/utils/auth/custom/client';
import { z as zod } from 'zod';
const HomePage = lazy(() => import('src/pages/index'));
const oAuthProviders = [
  {
    id: 'google',
    name: 'Google',
    logo: '/placeholders/logo/google-icon.svg',
  },
  {
    id: 'github',
    name: 'Github',
    logo: '/placeholders/logo/github-icon.svg',
  },
];
const schema = zod.object({
  email: zod
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email(),
  password: zod.string().min(1, {
    message: 'Password is required',
  }),
});
const defaultValues = {
  email: '',
  password: '',
};
export function AuthCustomLoginForm() {
  const router = useRouter();
  const { checkSession } = useAuth();
  

  const [isPending, setIsPending] = React.useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onAuth = React.useCallback(async (provider) => {
    setIsPending(true);
    const { error } = await authClient.signInWithOAuth({
      provider,
    });

    if (error) {
      setIsPending(false);
      // toast.error(error);
      return;
    }
    setIsPending(false);
  }, []);




  const onSubmit = React.useCallback(
    async (values) => {
    
      setIsPending(true);
      const { error } = await authClient.signInWithPassword(values);
      if (error) {
        setError('root', {
          type: 'server',
          message: error,
        });
        setIsPending(false);
        return;
      }

      console.log("onSubmit:");
      await checkSession();
      console.log("checkSession:",routes.HomePage);
      router.refresh();
      // router.push(routes.HomePage);
      
    },
    [router, setError, checkSession]
  );




  
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const updatedOAuthProviders = oAuthProviders.map((provider) => ({
    ...provider,
    logo:
      provider.id === 'github'
        ? isDarkMode
          ? '/placeholders/logo/github-icon-light.svg'
          : '/placeholders/logo/github-icon.svg'
        : provider.logo,
  }));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography
          align="center"
          variant="h3"
          gutterBottom
        >
          車美仕商品倉儲登入畫面
        </Typography>
        <Typography
          align="center"
          variant="h6"
          fontWeight={400}
        >
          請輸入帳號與OTP密碼
        </Typography>
      </Container>
      <Stack
        mt={{
          xs: 2,
          sm: 3,
        }}
        justifyContent="center"
        alignItems="center"
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        {/* <Container maxWidth="sm">
          <Stack
            justifyContent="center"
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={1}
          >
            {updatedOAuthProviders.map((provider) => (
              <Button
                fullWidth
                disabled={isPending}
                sx={{
                  whiteSpace: 'nowrap',
                }}
                variant="outlined"
                color="secondary"
                key={provider.id}
                onClick={() => onAuth(provider.id).catch(() => {})}
                startIcon={
                  <img
                    style={{
                      height: 24,
                      width: 24,
                    }}
                    alt="Google"
                    src={provider.logo}
                  />
                }
              >
                Sign in with {provider.name}
              </Button>
            ))}
          </Stack>
        </Container> */}
        <Divider flexItem>
          <Typography variant="subtitle1">or with email</Typography>
        </Divider>
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
          >
            <Grid xs={12}>
              <FormControl
                fullWidth
                error={Boolean(errors.email)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="email-input"
                  fontWeight={500}
                >
                  Email
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('email')}
                  type="email"
                  id="email-input"
                  placeholder="公司信箱@前英/數字"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineRoundedIcon fontSize="small" />
                    </InputAdornment>
                  }
                />
                {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                fullWidth
                error={Boolean(errors.password)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="password-input"
                  fontWeight={500}
                >
                  OTP(Password)
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password-input"
                  placeholder="Authenticator OTP驗證碼"
                  endAdornment={
                    <InputAdornment position="end">
                      <ButtonIcon
                        variant="outlined"
                        color="secondary"
                        sx={{
                          mr: -0.8,
                        }}
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </ButtonIcon>
                    </InputAdornment>
                  }
                />
                {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="keepSignedIn"
                      color="primary"
                    />
                  }
                  label={
                    <>
                      <Typography variant="body1">{t('記住我')}</Typography>
                    </>
                  }
                />
                <Link
                  component={RouterLink}
                  href={routes.auth['custom.reset-password']}
                  underline="hover"
                >
                  {t('沒有OTP密碼嗎，請點我')}
                </Link>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Button
                disabled={isPending}
                variant="contained"
                type="submit"
                size="large"
                fullWidth
              >
                Sign in
              </Button>
            </Grid>
            {/* <Grid
              xs={12}
              textAlign="center"
            >
              <Typography
                component="span"
                color="text.secondary"
              >
                Not a Member yet?
              </Typography>{' '}
              <Link
                component={RouterLink}
                href={routes.auth['custom.register']}
                underline="hover"
                fontWeight={500}
              >
                Sign up
              </Link>
            </Grid> */}
            {errors.root && (
              <Grid xs={12}>
                <Alert
                  variant="outlined"
                  severity="error"
                >
                  {errors.root.message}
                </Alert>
              </Grid>
            )}
            <Grid xs={12}>
              <Alert
                severity="warning"
                variant="outlined"
              >
                <AlertTitle
                  sx={{
                    pb: 0.3,
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  隱私權說明
                </AlertTitle>
                <Typography
                  variant="h5"
                  fontWeight={400}
                >
                  當您開始使用服務，即表示您信賴我們對您個人資訊的處理方式。我們深知這份責任重大，因此會盡力保護您的資訊，並為您提供相關的管理功能。
                </Typography>
              </Alert>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </form>
  );
}
