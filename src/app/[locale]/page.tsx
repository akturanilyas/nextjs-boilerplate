import { Locale } from '@/i18nConfig';
import { initServerTranslations } from '@/utils/getServerTranslations';
import { ExampleForm } from '@/components/forms/ExampleForm';

export default async function Home(props: { params: Promise<{ locale: Locale }> }) {
  const { params } = props;
  const { locale } = await params;

  await initServerTranslations({ locale });

  return (
    <div className='justify-items-center'>
      <ExampleForm />
    </div>
  );
}
