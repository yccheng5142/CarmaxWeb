import { Alert } from '@mui/material';
import React from 'react';
import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';

export function GuestGuard({ children }) {
  const router = useRouter();
  const { user, error, isLoading } = useAuth();
  const [isChecking, setIsChecking] = React.useState(true);
  const checkPermissions = async () => {
    if (isLoading) {
      return;
    }
    if (error) {
      setIsChecking(false);
      return;
    }
    if (user) {
      console.debug('User is logged in, redirecting to dashboard');
      router.push(routes.blueprints['generic-admin-dashboard'].index);
      return;
    }
    setIsChecking(false);
  };
  React.useEffect(() => {
    checkPermissions().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, [user, error, isLoading]);
  if (isChecking) {
    return null;
  }
  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
