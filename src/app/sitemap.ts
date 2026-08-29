import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/data/siteConfig';
import { PROJECTS_DATA } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;

  const coreRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/estimator', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/work', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/client-portal', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/client-agreement', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/refund', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/disclaimer', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.5, changeFrequency: 'yearly' as const },
  ].map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const projectRoutes = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...projectRoutes];
}
