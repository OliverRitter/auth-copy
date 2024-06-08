'use client';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';
import TopNav from './navbar/TopNav';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <TopNav />
      {children}
    </NextUIProvider>
  );
}
