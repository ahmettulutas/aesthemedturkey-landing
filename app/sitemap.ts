import { MetadataRoute } from 'next';
import { getAllBlogsSlugs } from '@/actions/blog';
import { availableLocales, defaultLanguage } from '@/i18n/settings';
import { staticPageUrls } from '@/lib/constants';
import { baseUrl } from '@/lib/env';

/* return type must be Sitemap
Reference link : https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap */

const staticSiteMapItems: MetadataRoute.Sitemap = staticPageUrls.flatMap((item) => {
  return availableLocales.map((locale) => {
    if (locale === defaultLanguage) {
      return {
        url: `${baseUrl}${item}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      };
    } else {
      return {
        url: `${baseUrl}${item}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      };
    }
  });
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allBlogsSlugs = await getAllBlogsSlugs();
  const dynamicMapItems: MetadataRoute.Sitemap = allBlogsSlugs.map(
    ({ language, _updatedAt, slug }) => ({
      url: `${baseUrl}${language === defaultLanguage ? '' : `/${language}`}/blogs/${slug}`,
      lastModified: _updatedAt,
      changeFrequency: 'daily',
      priority: 2,
    })
  );
  return [...staticSiteMapItems, ...dynamicMapItems];
}
