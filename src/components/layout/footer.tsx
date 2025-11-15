export function Footer() {
  const footerLinks = [
    { href: 'https://calculation.site/about', label: 'About' },
    { href: 'https://calculation.site/contact', label: 'Contact' },
    { href: 'https://calculation.site/privacy-policy', label: 'Privacy Policy' },
    { href: 'https://calculation.site/terms-and-conditions', label: 'Terms & Conditions' },
    { href: 'https://calculation.site/disclaimer', label: 'Disclaimer' },
  ];

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Caffeine Compass. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-muted-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
