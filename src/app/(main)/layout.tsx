import React from 'react';

import { SideNav } from '@/components/common/navigation/navbar/SideNav';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main style={{ flexDirection: 'row', display: 'flex', height: '100vh' }}>
        <SideNav />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default Layout;
