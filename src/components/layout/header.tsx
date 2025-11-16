import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { href: 'https://calculation.site', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://calculation.site/calculators', label: 'Calculators' },
  { href: 'https://calculation.site/business', label: 'CoffeeBizz' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="Caffeine Compass Logo" width={32} height={32} />
          <span className="font-bold font-headline text-lg sm:inline-block">
            Caffeine Compass
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
