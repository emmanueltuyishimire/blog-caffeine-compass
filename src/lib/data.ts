import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default or handle the error
    return {
      imageUrl: 'https://picsum.photos/seed/error/600/400',
      imageHint: 'placeholder',
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

const placeholderContent = `<p>This is a placeholder for the full blog post. Stay tuned for the complete article!</p>`;

export const blogPosts = [
  {
    slug: 'ryze-mushroom-coffee-review-2025',
    title: 'Ryze Mushroom Coffee Review (2025)',
    author: 'Caffeine Compass Staff',
    date: 'November 1, 2024',
    ...findImage('ryze-review'),
    excerpt: 'An honest review of Ryze mushroom coffee. Is it worth the hype in 2025? We break down the taste, ingredients, and effects.',
    content: placeholderContent,
  },
  {
    slug: 'ryze-vs-everyday-dose',
    title: 'Ryze vs Everyday Dose – Which Is Better?',
    author: 'Caffeine Compass Staff',
    date: 'October 31, 2024',
    ...findImage('ryze-vs-dose'),
    excerpt: 'A head-to-head comparison of two of the most popular mushroom coffee brands. We compare Ryze and Everyday Dose on price, flavor, and ingredients.',
    content: placeholderContent,
  },
  {
    slug: 'best-mushroom-coffee-brands-2025',
    title: 'Best Mushroom Coffee Brands in 2025',
    author: 'Caffeine Compass Staff',
    date: 'October 30, 2024',
    ...findImage('mushroom-brands'),
    excerpt: 'Looking for the best mushroom coffee? We rank the top brands of 2025 based on quality, taste, and health benefits.',
    content: placeholderContent,
  },
  {
    slug: 'does-mushroom-coffee-actually-work',
    title: 'Does Mushroom Coffee Actually Work?',
    author: 'Caffeine Compass Staff',
    date: 'October 29, 2024',
    ...findImage('mushroom-works'),
    excerpt: 'We dive into the science and user experiences to find out if mushroom coffee lives up to its promises of enhanced focus and energy.',
    content: placeholderContent,
  },
  {
    slug: 'mushroom-coffee-benefits-science-backed',
    title: 'Mushroom Coffee Benefits (Science-Backed)',
    author: 'Caffeine Compass Staff',
    date: 'October 28, 2024',
    ...findImage('mushroom-benefits'),
    excerpt: 'Explore the scientifically-proven health benefits of drinking mushroom coffee, from cognitive boosts to immune support.',
    content: placeholderContent,
  },
  {
    slug: 'mushroom-coffee-side-effects',
    title: 'Mushroom Coffee Side Effects',
    author: 'Caffeine Compass Staff',
    date: 'October 27, 2024',
    ...findImage('mushroom-side-effects'),
    excerpt: 'Are there any downsides to mushroom coffee? We investigate the potential side effects you should be aware of before making the switch.',
    content: placeholderContent,
  },
  {
    slug: 'best-mushroom-coffee-for-weight-loss',
    title: 'Best Mushroom Coffee for Weight Loss',
    author: 'Caffeine Compass Staff',
    date: 'October 26, 2024',
    ...findImage('mushroom-weight-loss'),
    excerpt: 'Can mushroom coffee help you lose weight? We review the top brands that claim to support weight management goals.',
    content: placeholderContent,
  },
  {
    slug: 'mud-wtr-review-is-it-worth-it',
    title: 'Mud/WTR Review – Is It Worth It?',
    author: 'Caffeine Compass Staff',
    date: 'October 25, 2024',
    ...findImage('mud-wtr-review'),
    excerpt: 'A deep-dive into Mud/WTR. We analyze its ingredients, taste, and whether it\'s a worthy alternative to your morning coffee.',
    content: placeholderContent,
  },
  {
    slug: 'homemade-mushroom-coffee-recipe',
    title: 'Homemade Mushroom Coffee Recipe',
    author: 'Caffeine Compass Staff',
    date: 'October 24, 2024',
    ...findImage('homemade-mushroom-coffee'),
    excerpt: 'Save money and customize your brew with our simple and delicious homemade mushroom coffee recipe.',
    content: placeholderContent,
  },
  {
    slug: 'mushroom-coffee-vs-regular-coffee',
    title: 'Mushroom Coffee vs Regular Coffee',
    author: 'Caffeine Compass Staff',
    date: 'October 23, 2024',
    ...findImage('mushroom-vs-regular'),
    excerpt: 'What\'s the real difference between mushroom coffee and regular coffee? We compare the two on caffeine content, health benefits, taste, and price.',
    content: placeholderContent,
  },
  {
    slug: 'the-ultimate-guide-to-pour-over-coffee',
    title: 'The Ultimate Guide to Pour-Over Coffee',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    ...findImage('pour-over-guide'),
    excerpt:
      'Master the art of pour-over coffee with our comprehensive guide. From choosing the right beans to perfecting your pouring technique, we cover it all.',
    content: `
      <p>Pour-over coffee is a method of brewing that involves pouring hot water over ground coffee beans contained in a filter. This simple process, when done correctly, can produce a cup of coffee with exceptional clarity of flavor. This guide will walk you through everything you need to know to get started.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">What You'll Need</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>A pour-over dripper (like a V60, Kalita Wave, or Chemex)</li>
        <li>Paper filters</li>
        <li>A gooseneck kettle</li>
        <li>A coffee grinder</li>
        <li>Freshly roasted coffee beans</li>
        <li>A digital scale</li>
        <li>A timer</li>
      </ul>
      <h2 class="text-2xl font-headline mt-6 mb-3">The Process: Step-by-Step</h2>
      <p><strong>Step 1: Grind Your Beans.</strong> For pour-over, a medium-fine grind is generally recommended, similar to the consistency of table salt. The perfect grind size can vary depending on your specific dripper and taste preferences.</p>
      <p class="mt-4"><strong>Step 2: Heat Your Water.</strong> The ideal water temperature is between 195-205°F (90-96°C). If you don't have a temperature-controlled kettle, you can bring water to a boil and let it sit for about 30 seconds.</p>
      <p class="mt-4"><strong>Step 3: The Bloom.</strong> Place the filter in your dripper, rinse it with hot water, and discard the water. Add your ground coffee to the filter and gently shake to level the bed. Start your timer and pour just enough water (about twice the weight of the coffee grounds) to saturate all the grounds. This is called the "bloom," and it allows the coffee to de-gas, resulting in a more even extraction. Let it bloom for 30-45 seconds.</p>
      <p class="mt-4"><strong>Step 4: The Pour.</strong> After the bloom, continue pouring the water in a slow, controlled, circular motion. Try to maintain a consistent water level in the dripper. Your total brew time should be around 2.5 to 4 minutes, depending on the batch size and your equipment.</p>
      <p class="mt-4"><strong>Step 5: Enjoy.</strong> Once all the water has drained through, remove the dripper and give your coffee a swirl. Let it cool slightly to allow the flavors to open up, then enjoy your perfectly brewed cup.</p>
    `,
  },
  {
    slug: 'decoding-coffee-labels',
    title: "Decoding Coffee Labels: A Beginner's Guide",
    author: 'John Smith',
    date: 'October 15, 2023',
    ...findImage('coffee-labels'),
    excerpt:
      "Ever feel lost staring at a bag of coffee beans? This guide breaks down what all those terms like 'single-origin,' 'processing method,' and 'tasting notes' actually mean.",
    content: `
      <p>Walking into a specialty coffee shop can be overwhelming. The bags are beautiful, but the labels are full of jargon. What's the difference between single-origin and a blend? Washed vs. natural? Let's decode the most common terms.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">Origin: Single-Origin vs. Blend</h2>
      <p><strong>Single-Origin:</strong> This means the coffee beans come from a single known geographical location, such as a specific farm or a small region within a country. Single-origin coffees are prized for showcasing the unique characteristics of that particular location's soil, climate, and altitude—often referred to as 'terroir'.</p>
      <p class="mt-4"><strong>Blend:</strong> A blend is a mix of beans from different origins. Roasters create blends to achieve a specific, consistent flavor profile that might not be achievable with a single-origin. Blends are often used for espresso to create a balanced shot with good crema, body, and flavor complexity.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">Processing Method</h2>
      <p>Processing is the step that removes the coffee cherry fruit from the bean inside. It has a massive impact on flavor.</p>
      <p class="mt-4"><strong>Washed (or Wet) Process:</strong> The fruit is scrubbed off the bean mechanically before the beans are dried. This method tends to produce coffees with higher acidity and a cleaner, brighter flavor profile. You'll get more flavors inherent to the bean itself.</p>
      <p class="mt-4"><strong>Natural (or Dry) Process:</strong> The entire coffee cherry is dried intact before the fruit is removed. This process can impart intense, fruity, and often wine-like flavors to the bean as it ferments inside the drying fruit. These coffees are typically sweeter and have a heavier body.</p>
      <h2 class="text-2xl font-headline mt-6 mb-3">Tasting Notes</h2>
      <p>These are not added flavors! Tasting notes are the roaster's description of the natural flavors they perceive in the coffee, similar to how one might describe the notes in wine or chocolate. It's a guide to help you find a coffee you might like. If you see "notes of chocolate, nuts, and caramel," you can expect a rich, less acidic coffee. If you see "notes of lemon, blueberry, and jasmine," you're likely in for a bright, acidic, and fruity cup.</p>
    `,
  },
];

export const productReviews = [
  {
    slug: 'aeropress-go-review',
    productName: 'Aeropress Go',
    rating: 5,
    ...findImage('aeropress-go'),
    summary:
      'The Aeropress Go is the perfect companion for coffee lovers on the move. It packs all the brewing power of the original into a brilliantly designed, self-contained travel mug.',
  },
  {
    slug: 'baratza-encore-review',
    productName: 'Baratza Encore Grinder',
    rating: 4,
    ...findImage('baratza-grinder'),
    summary:
      "A fantastic entry-level burr grinder that offers consistency and durability. It's the go-to recommendation for anyone starting their home brewing journey.",
  },
  {
    slug: 'chemex-classic-review',
    productName: 'Chemex Classic (6-cup)',
    rating: 4,
    ...findImage('chemex-review'),
    summary:
      "Not just a beautiful piece of design, the Chemex brews an exceptionally clean cup of coffee thanks to its thick, proprietary filters. A bit more hands-on, but worth the effort.",
  },
];
