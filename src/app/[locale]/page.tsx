'use client';

import { useForm } from 'react-hook-form';
import { ExampleForm } from '@/components/forms/ExampleForm';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const form = useForm<Record<string, unknown>>();
  const { t } = useTranslation();

  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <ExampleForm form={form} />
      {t('test')}
    </div>
  );
}
