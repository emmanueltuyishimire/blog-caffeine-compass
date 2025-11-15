
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
    slug: 'how-much-caffeine-in-coffee-table',
    title: 'How Much Caffeine Is in Coffee? (Table Included)',
    author: 'Caffeine Compass Staff',
    date: 'December 5, 2024',
    ...findImage('caffeine-table'),
    excerpt: 'A detailed breakdown of the caffeine content in different types of coffee, from espresso to cold brew, complete with a helpful comparison table.',
    content: placeholderContent,
  },
  {
    slug: 'how-much-caffeine-in-a-cup-of-coffee',
    title: 'How Much Caffeine in a Cup of Coffee?',
    author: 'Caffeine Compass Staff',
    date: 'December 4, 2024',
    ...findImage('caffeine-cup'),
    excerpt: 'The simple answer to a common question. We explore the factors that influence caffeine levels in your daily cup.',
    content: placeholderContent,
  },
  {
    slug: 'how-long-does-caffeine-stay-in-your-system',
    title: 'How Long Does Caffeine Stay in Your System?',
    author: 'Caffeine Compass Staff',
    date: 'December 3, 2024',
    ...findImage('caffeine-system'),
    excerpt: 'Understanding the half-life of caffeine and how long its effects can last in your body. We look at the science behind caffeine metabolism.',
    content: placeholderContent,
  },
  {
    slug: 'caffeine-withdrawal-symptoms-timeline',
    title: 'Caffeine Withdrawal Symptoms & Timeline',
    author: 'Caffeine Compass Staff',
    date: 'December 2, 2024',
    ...findImage('caffeine-withdrawal'),
    excerpt: 'Thinking of a caffeine detox? Here’s what to expect. A guide to the common symptoms of caffeine withdrawal and how long they typically last.',
    content: placeholderContent,
  },
  {
    slug: 'does-caffeine-dehydrate-you',
    title: 'Does Caffeine Dehydrate You?',
    author: 'Caffeine Compass Staff',
    date: 'December 1, 2024',
    ...findImage('caffeine-dehydration'),
    excerpt: 'We bust the myth about coffee and dehydration. Find out what the science says about caffeine’s effects on your hydration levels.',
    content: placeholderContent,
  },
  {
    slug: 'does-coffee-make-you-sleepy',
    title: 'Does Coffee Make You Sleepy?',
    author: 'Caffeine Compass Staff',
    date: 'November 30, 2024',
    ...findImage('caffeine-sleepy'),
    excerpt: 'It sounds counterintuitive, but for some people, coffee can lead to fatigue. We explore the reasons why, from adenosine to sugar crashes.',
    content: placeholderContent,
  },
  {
    slug: 'does-coffee-make-you-poop',
    title: 'Does Coffee Make You Poop? (Real Reason)',
    author: 'Caffeine Compass Staff',
    date: 'November 29, 2024',
    ...findImage('caffeine-poop'),
    excerpt: 'It’s a question many people wonder about. We look at the science behind why coffee can stimulate your digestive system.',
    content: placeholderContent,
  },
  {
    slug: 'how-much-caffeine-is-too-much',
    title: 'How Much Caffeine Is Too Much?',
    author: 'Caffeine Compass Staff',
    date: 'November 28, 2024',
    ...findImage('caffeine-too-much'),
    excerpt: 'A look at the recommended daily limits for caffeine and the signs that you might be consuming too much.',
    content: placeholderContent,
  },
  {
    slug: 'caffeine-in-tea-vs-coffee',
    title: 'Caffeine in Tea vs Coffee',
    author: 'Caffeine Compass Staff',
    date: 'November 27, 2024',
    ...findImage('tea-vs-coffee'),
    excerpt: 'Which has more caffeine? We compare the caffeine content in various types of tea and coffee to help you choose your brew.',
    content: placeholderContent,
  },
  {
    slug: 'caffeine-chart-popular-drinks-compared',
    title: 'Caffeine Chart: Popular Drinks Compared',
    author: 'Caffeine Compass Staff',
    date: 'November 26, 2024',
    ...findImage('caffeine-chart'),
    excerpt: 'See how your favorite coffee, tea, soda, and energy drinks stack up in our comprehensive caffeine comparison chart.',
    content: placeholderContent,
  },
  {
    slug: 'does-matcha-have-caffeine',
    title: 'Does Matcha Have Caffeine?',
    author: 'Caffeine Compass Staff',
    date: 'November 25, 2024',
    ...findImage('matcha-caffeine'),
    excerpt: 'A definitive guide to the caffeine content in matcha and how it compares to your typical cup of coffee.',
    content: placeholderContent,
  },
  {
    slug: 'matcha-vs-coffee',
    title: 'Matcha vs Coffee – Which Keeps You Awake Longer?',
    author: 'Caffeine Compass Staff',
    date: 'November 24, 2024',
    ...findImage('matcha-vs-coffee'),
    excerpt: 'We compare the energizing effects of matcha and coffee, looking at the science of L-theanine and caffeine.',
    content: placeholderContent,
  },
  {
    slug: 'does-green-tea-have-caffeine',
    title: 'Does Green Tea Have Caffeine?',
    author: 'Caffeine Compass Staff',
    date: 'November 23, 2024',
    ...findImage('green-tea-caffeine'),
    excerpt: 'Exploring the caffeine levels in different types of green tea and how it affects your body.',
    content: placeholderContent,
  },
  {
    slug: 'best-caffeine-free-coffee-alternatives',
    title: 'Best Caffeine-Free Coffee Alternatives',
    author: 'Caffeine Compass Staff',
    date: 'November 22, 2024',
    ...findImage('caffeine-free-alternatives'),
    excerpt: 'Looking to cut back on caffeine? We review the best-tasting and most satisfying coffee alternatives on the market.',
    content: placeholderContent,
  },
  {
    slug: 'yerba-mate-vs-coffee-energy-comparison',
    title: 'Yerba Mate vs Coffee Energy Comparison',
    author: 'Caffeine Compass Staff',
    date: 'November 21, 2024',
    ...findImage('yerba-mate-vs-coffee'),
    excerpt: 'A detailed comparison of the buzz from yerba mate and coffee. Which one provides a better, more sustained energy boost?',
    content: placeholderContent,
  },
  {
    slug: 'best-coffee-makers-2025',
    title: 'Best Coffee Makers 2025',
    author: 'Caffeine Compass Staff',
    date: 'December 20, 2024',
    ...findImage('coffee-makers-2025'),
    excerpt: 'Our definitive guide to the best coffee makers of 2025, covering everything from drip to espresso.',
    content: placeholderContent,
  },
  {
    slug: 'keurig-coffee-makers-best-models-ranked',
    title: 'Keurig Coffee Makers – Best Models Ranked',
    author: 'Caffeine Compass Staff',
    date: 'December 19, 2024',
    ...findImage('keurig-ranked'),
    excerpt: 'We rank the best Keurig models available, from single-serve brewers to versatile multi-stream machines.',
    content: placeholderContent,
  },
  {
    slug: 'ninja-coffee-maker-review-2025',
    title: 'Ninja Coffee Maker Review 2025',
    author: 'Caffeine Compass Staff',
    date: 'December 18, 2024',
    ...findImage('ninja-review'),
    excerpt: 'Is the Ninja coffee maker right for you? A comprehensive review of its features, performance, and value.',
    content: placeholderContent,
  },
  {
    slug: 'best-coffee-makers-under-50',
    title: 'Best Coffee Makers Under $50',
    author: 'Caffeine Compass Staff',
    date: 'December 17, 2024',
    ...findImage('under-50'),
    excerpt: 'Great coffee doesn\'t have to be expensive. We found the best budget-friendly coffee makers that deliver a quality brew.',
    content: placeholderContent,
  },
  {
    slug: 'best-coffee-makers-for-small-spaces',
    title: 'Best Coffee Makers for Small Spaces',
    author: 'Caffeine Compass Staff',
    date: 'December 16, 2024',
    ...findImage('small-spaces'),
    excerpt: 'Don\'t let a small kitchen stop you from brewing great coffee. Here are our top picks for compact coffee makers.',
    content: placeholderContent,
  },
  {
    slug: 'best-programmable-coffee-makers',
    title: 'Best Programmable Coffee Makers',
    author: 'Caffeine Compass Staff',
    date: 'December 15, 2024',
    ...findImage('programmable-coffee'),
    excerpt: 'Wake up to the smell of fresh coffee with our review of the best programmable coffee makers on the market.',
    content: placeholderContent,
  },
  {
    slug: 'cheapest-coffee-makers-that-dont-suck',
    title: 'Cheapest Coffee Makers That Don’t Suck',
    author: 'Caffeine Compass Staff',
    date: 'December 14, 2024',
    ...findImage('cheapest-coffee'),
    excerpt: 'On a tight budget? We tested the cheapest coffee makers to find the ones that still make a decent cup.',
    content: placeholderContent,
  },
  {
    slug: 'best-coffee-makers-for-college-students',
    title: 'Best Coffee Makers for College Students',
    author: 'Caffeine Compass Staff',
    date: 'December 13, 2024',
    ...findImage('college-coffee'),
    excerpt: 'Fuel those late-night study sessions with our top coffee maker picks for dorm rooms and small apartments.',
    content: placeholderContent,
  },
  {
    slug: 'single-serve-vs-drip-coffee',
    title: 'Single-Serve vs Drip Coffee – Which Is Better?',
    author: 'Caffeine Compass Staff',
    date: 'December 12, 2024',
    ...findImage('single-vs-drip'),
    excerpt: 'The ultimate showdown: convenience vs. quality. We break down the pros and cons of single-serve and drip coffee makers.',
    content: placeholderContent,
  },
  {
    slug: '10-signs-you-need-a-new-coffee-maker',
    title: '10 Signs You Need a New Coffee Maker',
    author: 'Caffeine Compass Staff',
    date: 'December 11, 2024',
    ...findImage('new-coffee-maker'),
    excerpt: 'Is your old coffee maker on its last legs? Here are 10 telltale signs that it might be time for an upgrade.',
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
