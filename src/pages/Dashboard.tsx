import { useEffect, useState } from 'react';
import { Zap, Plus, Store, BarChart3, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/Button';
import { CreateStoreModal } from '../components/CreateStoreModal';
import { supabase, Store as StoreType } from '../lib/supabase';

export function Dashboard() {
  const { user, profile, signOut } = useAuth();
  const [stores, setStores] = useState<StoreType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    loadStores();
  }, [user]);

  const loadStores = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('stores')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (data) {
      setStores(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold tracking-tight">Wozify</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-400">
              {profile?.full_name || profile?.email}
            </div>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 border-r border-white/5 min-h-[calc(100vh-73px)] p-6">
          <nav className="space-y-2">
            <a
              href="#stores"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/5 text-white"
            >
              <Store className="w-5 h-5" />
              <span className="font-medium">Stores</span>
            </a>
            <a
              href="#analytics"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Analytics</span>
            </a>
            <a
              href="#settings"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Your Stores</h1>
                <p className="text-gray-400 mt-2">
                  Manage and monitor your commerce operations
                </p>
              </div>
              <Button onClick={() => setShowCreateModal(true)}>
                <Plus className="w-5 h-5 mr-2" />
                Create Store
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-20 text-gray-400">Loading...</div>
            ) : stores.length === 0 ? (
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center space-y-4">
                <Store className="w-16 h-16 text-gray-600 mx-auto" />
                <h3 className="text-xl font-semibold">No stores yet</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Create your first store to start building your commerce platform
                </p>
                <Button className="mt-4" onClick={() => setShowCreateModal(true)}>
                  <Plus className="w-5 h-5 mr-2" />
                  Create Your First Store
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stores.map((store) => (
                  <div
                    key={store.id}
                    className="p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-amber-500/10 rounded-lg">
                        <Store className="w-6 h-6 text-amber-500" />
                      </div>
                      <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
                        {store.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {store.description || 'No description'}
                    </p>
                    <div className="text-xs text-gray-500">
                      {store.domain || `${store.slug}.wozify.com`}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Total Revenue', value: '$0', change: '+0%' },
                { label: 'Orders', value: '0', change: '+0%' },
                { label: 'Conversion Rate', value: '0%', change: '+0%' },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/[0.02] border border-white/5 rounded-xl"
                >
                  <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-green-500">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {showCreateModal && (
        <CreateStoreModal
          onClose={() => setShowCreateModal(false)}
          onSuccess={loadStores}
        />
      )}
    </div>
  );
}
