import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

const URL = process.env.URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts.map((post) => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = ['/'].map((route) => ({
    url: `${URL}/blog${route === '/' ? '' : route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...posts];
}
