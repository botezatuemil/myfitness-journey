import React from 'react';

import { Header } from '@/components/common/navigation/Header';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Header />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default Layout;
