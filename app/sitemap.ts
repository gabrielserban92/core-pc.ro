import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://core-pc.ro';

  // Define all static routes for the application
  const routes = [
    '',
    '/livrare-ridicare',
    '/politica-de-confidentialitate',
    '/politica-de-cookies',
    '/termeni-si-conditii',
    '/servicii/asamblare-pc',
    '/servicii/configurare-pc',
    '/servicii/inlocuire-componente',
    '/servicii/instalare-office',
    '/servicii/instalare-sistem-operare',
    '/servicii/mentenanta-console',
    '/servicii/mentenanta-laptop',
    '/servicii/mentenanta-pc',
    '/servicii/optimizare-sistem-operare',
    '/servicii/update-bios',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/servicii') ? 0.8 : 0.5,
  }));
}
