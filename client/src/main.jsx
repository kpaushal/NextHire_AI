import 'regenerator-runtime/runtime';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// Config Axios for Production
if (import.meta.env.VITE_API_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL.replace(/\/+$/, '');
}

import { ClerkProvider } from '@clerk/react'

import GlobalErrorBoundary from './components/GlobalErrorBoundary';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const hasValidClerkKey = Boolean(PUBLISHABLE_KEY) && !PUBLISHABLE_KEY.includes('your_clerk_publishable_key')

const rootElement = document.getElementById('root')

const AppShell = () => {
  if (!hasValidClerkKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
        <div className="max-w-md rounded-lg border border-[var(--border-medium)] bg-surface p-8 text-center shadow-2xl">
          <h1 className="text-xl font-semibold">Clerk is not configured yet</h1>
          <p className="mt-3 text-sm text-muted-text">
            Add a real publishable key to the client environment file and restart the dev server.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-subtle">
            VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
          </p>
        </div>
      </div>
    )
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <AppShell />
    </GlobalErrorBoundary>
  </StrictMode>,
)
