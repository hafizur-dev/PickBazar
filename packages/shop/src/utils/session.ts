import cookie from 'js-cookie';
import nextCookie from 'next-cookies';
// import { isBrowser } from './isBrowser';
const isBrowser = typeof window !== 'undefined';

export const getCookieFromBrowser = (key: string): any => {
  return cookie.get(key);
};

export const getCookieFromServer = (ctx: any, key = 'id_token') => {
  const cookie = nextCookie(ctx);
  const token = cookie && cookie[key] ? cookie[key] : false;
  if (!token) {
    return null;
  }
  return token;
};

export const getCookie = (key: string, context?: any) => {
  return isBrowser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(context, key);
};

export const setCookie = (key: string, token: any) => {
  cookie.set(key, token, { expires: 7 });
};

export const removeCookie = (key: string) => {
  cookie.remove(key);
};
