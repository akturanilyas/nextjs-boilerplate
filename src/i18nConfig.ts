import { I18NConfig } from 'next/dist/server/config-shared';

export const i18nConfig: I18NConfig = {
  defaultLocale: 'tr',
  locales: ['en', 'tr'],
  localeDetection: false,
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
