import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';

import enTranslationMessages from './translations/en.json';

addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

export const appLocales = [
  'en',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== 'en'
    ? formatTranslationMessages('en', enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== 'en'
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
};
