import { CaffeineCalculator } from '@/components/calculator/caffeine-calculator';

export default function CalculatorPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Caffeine Calculator</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Estimate your caffeine consumption and see how it compares to recommended daily limits based on your body weight.
        </p>
      </div>
      <div className="mt-12">
        <CaffeineCalculator />
      </div>
    </div>
  );
}
