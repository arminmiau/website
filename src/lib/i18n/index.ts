import { browser } from '$app/environment';
import { register, init, waitLocale, locale } from 'svelte-i18n';

const defaultLocale = 'en-GB';

register('en-GB', () => import('$lib/i18n/locales/en.json'));
register('de-DE', () => import('$lib/i18n/locales/de.json'));

let localeCookie: string | undefined = undefined;
if (browser) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; locale=`);
  if (parts.length === 2)
    localeCookie = parts.pop()?.split(';').shift() ?? undefined;
}

const initialLocale = localeCookie ? localeCookie : defaultLocale;
init({
  fallbackLocale: defaultLocale,
  initialLocale: initialLocale,
});

await waitLocale();

locale.subscribe((locale) => {
  if (browser && locale) document.cookie = 'locale=' + locale;
});
