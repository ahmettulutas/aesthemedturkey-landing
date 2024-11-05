import { HomeSlider } from '@/components/home-slider';
import { createTranslation } from '@/i18n';
import { SharedPageProps } from '@/types/shared';

export default async function Home({ params }: SharedPageProps) {
  const { t } = await createTranslation(params.lng, 'translation');
  return (
    <div className='items-center justify-center flex flex-col h-screen w-screen'>
      <h1>{t('metaData.pageTitle')}</h1>
      <p>{t('metaData.pageDescription')}</p>
      <p>{t('welcome')}</p>

      <HomeSlider />
    </div>
  );
}
