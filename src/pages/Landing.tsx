import { ArrowRight, Zap, Shield, TrendingUp, Layers, Globe, BarChart3 } from 'lucide-react';
import { Button } from '../components/Button';

interface LandingProps {
  onGetStarted: () => void;
}

export function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold tracking-tight">Wozify</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#enterprise" className="text-sm text-gray-400 hover:text-white transition-colors">Enterprise</a>
            <Button variant="ghost" size="sm" onClick={onGetStarted}>Sign In</Button>
            <Button size="sm" onClick={onGetStarted}>Get Started</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-500 font-medium">
              Enterprise Commerce Platform
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              Build commerce at
              <span className="block mt-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                unprecedented scale
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The infrastructure layer for modern commerce. Built for teams that refuse to compromise on performance, security, or scale.
            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Button size="lg" onClick={onGetStarted}>
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
              <Button variant="secondary" size="lg">
                View Documentation
              </Button>
            </div>
            <div className="pt-8 text-sm text-gray-500">
              Trusted by teams at Fortune 500 companies
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '<50ms', label: 'Global latency' },
              { value: '10M+', label: 'Requests/second' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 p-8 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="text-4xl font-bold text-amber-500">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Built for performance</h2>
            <p className="text-xl text-gray-400">Enterprise-grade infrastructure without the complexity</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Edge Network',
                description: 'Deploy to 300+ locations worldwide. Sub-50ms response times from anywhere on Earth.',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'SOC 2 Type II certified. End-to-end encryption. Zero-trust architecture.',
              },
              {
                icon: TrendingUp,
                title: 'Infinite Scale',
                description: 'Auto-scaling infrastructure that grows with your business. No ceiling.',
              },
              {
                icon: Layers,
                title: 'Composable Architecture',
                description: 'API-first design. Integrate with any stack. Build exactly what you need.',
              },
              {
                icon: BarChart3,
                title: 'Real-time Analytics',
                description: 'Track everything. Understand your customers. Make data-driven decisions.',
              },
              {
                icon: Zap,
                title: 'Lightning Deploy',
                description: 'Push to production in seconds. Instant rollbacks. Zero downtime.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise" className="py-32 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready when you are</h2>
            <p className="text-xl text-gray-400">
              Join the companies building the future of commerce on Wozify.
            </p>
            <div className="pt-8">
              <Button size="lg" onClick={onGetStarted}>
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-bold">Wozify</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Wozify. Built for scale.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
