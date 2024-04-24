import React from 'react';
import { AuthSupabaseRegisterForm } from 'src/components/application-ui/user-auth/register/auth-supabase-register-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';

function PageContent() {
  return (
    <>
      <Helmet heading="Create new account" />
      <AuthLayout>
        <AuthSupabaseRegisterForm />
      </AuthLayout>
    </>
  );
}
export default function Page() {
  return <PageContent />;
}
