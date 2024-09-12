// src/app/layout.tsx
"use client";

import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import SideNavbar from '../app/components/layout-discover/sideNavbar';
import { AuthProvider, useAuth } from './context/authContext';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider> {/* Wrap the entire layout in AuthProvider */}
          <LayoutWithAuth>{children}</LayoutWithAuth>
        </AuthProvider>
      </body>
    </html>
  );
}

function LayoutWithAuth({ children }: { children: React.ReactNode }) {
  const { user } = useAuth(); // Use the hook inside a component where AuthProvider is already available

  return (
    <div className="flex h-screen">
      {user && <SideNavbar />} {/* Show SideNavbar only if the user is logged in */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
