import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, { Component } from 'react'
import { Suspense, lazy } from 'react'
import { AuthProvider, useAuth } from './hooks/useAuth'

// Lazy loaded pages to reduce initial bundle size
const Landing = lazy(() => import('./pages/Landing').then(m => ({ default: m.Landing })))
const Auth = lazy(() => import('./pages/Auth').then(m => ({ default: m.Auth })))
const Dashboard = lazy(() => import('./pages/Dashboard').then(m => ({ default: m.Dashboard })))
const Game = lazy(() => import('./pages/Game').then(m => ({ default: m.Game })))
const Lobby = lazy(() => import('./pages/Lobby').then(m => ({ default: m.Lobby })))
const MultiplayerGame = lazy(() => import('./pages/MultiplayerGame').then(m => ({ default: m.MultiplayerGame })))
const Campaign = lazy(() => import('./pages/Campaign').then(m => ({ default: m.Campaign })))

class ErrorBoundary extends Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: 'white', background: '#dc2626', minHeight: '100vh' }}>
          <h1>Something went wrong.</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.toString()}</pre>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error?.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

// Minimal Loading Spinner for Suspense fallback
function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <div style={{ width: 40, height: 40, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#f59e0b', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  if (loading) {
    return <PageLoader />
  }
  return user ? <>{children}</> : <Navigate to="/auth" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  if (loading) return <PageLoader />
  return user ? <Navigate to="/dashboard" replace /> : <>{children}</>
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<PublicRoute><Auth /></PublicRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/game" element={<ProtectedRoute><Game /></ProtectedRoute>} />
        <Route path="/game/level/:levelId" element={<ProtectedRoute><Game /></ProtectedRoute>} />
        <Route path="/campaign" element={<ProtectedRoute><Campaign /></ProtectedRoute>} />
        <Route path="/multiplayer" element={<ProtectedRoute><Lobby /></ProtectedRoute>} />
        <Route path="/multiplayer/:roomId" element={<ProtectedRoute><MultiplayerGame /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
