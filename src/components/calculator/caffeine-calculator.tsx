'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { AlertCircle } from 'lucide-react';

const coffeeTypes = [
  { name: 'Drip Coffee (8 oz)', caffeine: 95 },
  { name: 'Espresso (1 shot)', caffeine: 64 },
  { name: 'Americano (12 oz)', caffeine: 128 },
  { name: 'Latte (12 oz)', caffeine: 64 },
  { name: 'Cold Brew (12 oz)', caffeine: 150 },
  { name: 'Tea (8 oz)', caffeine: 47 },
];

const FormSchema = z.object({
  weight: z.preprocess(
    (a) => parseFloat(z.string().parse(a)),
    z.number().positive('Weight must be a positive number.')
  ),
  drink: z.string().min(1, 'Please select a drink.'),
  quantity: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().int().positive('Quantity must be a positive number.')
  ),
});

interface CalculationResult {
  safeLimit: number;
  consumed: number;
}

export function CaffeineCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      weight: 70,
      drink: '',
      quantity: 1,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const selectedDrink = coffeeTypes.find((d) => d.name === data.drink);
    if (!selectedDrink) return;

    const safeLimit = Math.round(data.weight * 6);
    const consumed = selectedDrink.caffeine * data.quantity;
    
    setResult({ safeLimit, consumed });
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Caffeine Intake Estimator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Body Weight (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 70" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="drink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drink Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a drink" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {coffeeTypes.map((drink) => (
                          <SelectItem key={drink.name} value={drink.name}>
                            {drink.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" placeholder="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Calculate</Button>
          </form>
        </Form>
        
        {result && (
          <div className="mt-8">
            <h3 className="font-headline text-xl mb-4">Your Results</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Consumed: {result.consumed}mg</span>
                  <span>Safe Limit: {result.safeLimit}mg</span>
                </div>
                <Progress value={(result.consumed / result.safeLimit) * 100} />
              </div>
              {result.consumed > result.safeLimit && (
                 <p className="text-sm text-destructive flex items-center"><AlertCircle className="w-4 h-4 mr-2"/>You've exceeded the estimated safe daily intake.</p>
              )}
              <p className="text-xs text-muted-foreground pt-2">
                Disclaimer: This is an estimate based on general health guidelines (up to 6mg of caffeine per kg of body weight). Safe caffeine levels can vary greatly between individuals. Consult a healthcare professional for personalized advice.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
