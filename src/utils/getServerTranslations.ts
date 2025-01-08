import 'server-only';

import { getRequestContext, setRequestContext } from '@/contexts/server-context';
import { LOCALE_KEY, TRANSLATION_KEY } from '@/constants/cache-constants';

/**
 * Translation on server side
 *
 * @param key string
 */
export const translate = (key: string) => {
  const translationStr = getRequestContext(TRANSLATION_KEY);
  const translation = translationStr ? JSON.parse(translationStr as string) : {};

  return (
    key
      .split('.')
      .reduce<unknown>((acc, part) => {
        if (acc && typeof acc === 'object' && part in acc) {
          return (acc as Record<string, unknown>)[part];
        }

        return key;
      }, translation)
      ?.toString() || key
  );
};

export const initServerTranslations = async ({ locale }: { locale: string }) => {
  setRequestContext(LOCALE_KEY, locale);
  const translation = import(`@/locales/${locale}.json`).then((module) => module.default);

  setRequestContext(TRANSLATION_KEY, JSON.stringify(translation));
};
