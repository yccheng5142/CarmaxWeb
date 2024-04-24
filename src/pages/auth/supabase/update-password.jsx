import React from 'react';
import { UpdatePasswordForm } from 'src/components/application-ui/user-auth/recover-password/auth-supabase-update-password-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';

function PageContent() {
  return (
    <>
      <Helmet heading="Update password" />
      <AuthLayout>
        <UpdatePasswordForm />
      </AuthLayout>
    </>
  );
}
export default function Page() {
  return <PageContent />;
}
