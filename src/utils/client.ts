import { useAtom } from 'jotai';
import useSWR from 'swr';

export const cFetch = (url: string, token: string) =>
  fetch(`${import.meta.env.VITE_API_ENDPOINT}${url}`, {
    headers: { Authorization: `${token}` }
  })
    .then((e) => {
      if (e.status === 403) {
        // get current url
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = `/login?redirect=${window.location.pathname}`;
      } else return e;
    })
    .then((e) => e?.json())
    .catch((e) => {
      console.log(e);
      return {};
    });

export const useCSWR = <T = unknown>(url: string, token?: string) =>
  useSWR<T>(
    token ? `${import.meta.env.VITE_API_ENDPOINT}${url}` : null,
    () => cFetch(url, token!),
    // { suspense: true }
  );
