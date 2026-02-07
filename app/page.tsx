import { ParallaxHero } from '@/components/parallax-hero';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ParallaxHero />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to build your Second Brain?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start capturing your knowledge today and let AI help you organize and discover insights.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 py-6">
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
