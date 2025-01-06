'use client';

import { createInstance, Resource } from 'i18next';
import { FC, ReactNode } from 'react';
import initTranslations from '@/utils/i18n';
import { I18nextProvider } from 'react-i18next';

export type TranslationsProviderProps = {
  children: ReactNode;
  locale: string;
  resources?: Resource;
};

export const TranslationsProvider: FC<TranslationsProviderProps> = (props) => {
  const { children, locale, resources } = props;
  const i18n = createInstance();

  initTranslations({ locale, resources, i18nInstance: i18n });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
