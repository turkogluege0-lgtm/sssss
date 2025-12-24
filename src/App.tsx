import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Landing } from './pages/Landing';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';

function AppContent() {
  const [view, setView] = useState<'landing' | 'auth'>('landing');
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      setView('landing');
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-amber-500">Loading...</div>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  if (view === 'auth') {
    return <Auth onBack={() => setView('landing')} />;
  }

  return <Landing onGetStarted={() => setView('auth')} />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
