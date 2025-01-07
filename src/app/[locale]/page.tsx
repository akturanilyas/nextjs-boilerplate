import { Locale } from '@/i18nConfig';
import { initServerTranslations, translate } from '@/utils/getServerTranslations';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { params } = props;
  const { locale } = await params;

  await initServerTranslations({ locale });

  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <span>{translate('test')}</span>
    </div>
  );
}
