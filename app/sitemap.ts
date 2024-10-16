import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bloc-preview-card.tloyan.com/',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}