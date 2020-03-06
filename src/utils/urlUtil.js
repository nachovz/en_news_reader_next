import { SITE_URL } from 'data/constants';

export const urlCleaner = (url) => url.replace(SITE_URL, '');
export const slugFinder = (url) => {
  const splitted = url.split('/');
  return splitted[splitted.length-2];
}