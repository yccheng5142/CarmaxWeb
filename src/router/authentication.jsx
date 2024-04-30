import { Outlet } from 'react-router-dom';
import { AuthGuard } from 'src/components/auth/auth-guard';
import { GuestGuard } from 'src/components/auth/guest-guard';
import { StrategyGuard } from 'src/components/auth/strategy-guard';
import CustomAuthLoginPage from 'src/pages/auth/custom/login';
import CustomAuthRegisterPage from 'src/pages/auth/custom/register';
import CustomAuthResetPasswordPage from 'src/pages/auth/custom/reset-password';
import SupabaseAuthCallbackPage from 'src/pages/auth/supabase/callback';
import SupabaseAuthLoginPage from 'src/pages/auth/supabase/login';
import SupabaseAuthResetPasswordSentPage from 'src/pages/auth/supabase/recover-link-sent';
import SupabaseAuthRegisterPage from 'src/pages/auth/supabase/register';
import SupabaseAuthRegisterConfirmPage from 'src/pages/auth/supabase/register-confirm';
import SupabaseAuthResetPasswordPage from 'src/pages/auth/supabase/reset-password';
import SupabaseAuthUpdatePasswordPage from 'src/pages/auth/supabase/update-password';
import { AuthStrategy } from 'src/utils/auth/strategy';

export const authenticationRoutes = [
  {
    path: 'custom',
    element: (
      <StrategyGuard expected={AuthStrategy.CUSTOM}>
        <Outlet />
      </StrategyGuard>
    ),
    children: [
      {
        path: 'reset-password',
        element: (
          <GuestGuard>
            <CustomAuthResetPasswordPage />
          </GuestGuard>
        ),
      },
      {
        path: 'login',
        element: (
          <GuestGuard>
            <CustomAuthLoginPage />
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <CustomAuthRegisterPage />
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: 'supabase',
    element: (
      <StrategyGuard expected={AuthStrategy.SUPABASE}>
        <Outlet />
      </StrategyGuard>
    ),
    children: [
      {
        path: 'callback',
        element: <SupabaseAuthCallbackPage />,
      },
      {
        path: 'reset-password',
        element: (
          <GuestGuard>
            <SupabaseAuthResetPasswordPage />
          </GuestGuard>
        ),
      },
      {
        path: 'recover-link-sent',
        element: (
          <GuestGuard>
            <SupabaseAuthResetPasswordSentPage />
          </GuestGuard>
        ),
      },
      {
        path: 'login',
        element: (
          <GuestGuard>
            <SupabaseAuthLoginPage />
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <SupabaseAuthRegisterPage />
          </GuestGuard>
        ),
      },
      {
        path: 'register-confirm',
        element: (
          <GuestGuard>
            <SupabaseAuthRegisterConfirmPage />
          </GuestGuard>
        ),
      },
      {
        path: 'update-password',
        element: (
          <AuthGuard>
            <SupabaseAuthUpdatePasswordPage />
          </AuthGuard>
        ),
      },
    ],
  },
];
