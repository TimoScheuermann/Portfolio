import router from '@/router';
import store from '@/store';
import { backendURL } from './constants';
import { IUser } from './interfaces';

const lsKey = 'timos-design-auth';

export function getToken(): string | null {
  return localStorage.getItem(lsKey);
}

export function getUserFromJWT(): IUser {
  const base64Url = (getToken() || 'A.B.C').split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export async function signOut() {
  localStorage.removeItem(lsKey);
  await router.push({ name: 'login' });
  store.commit('signOut');
}

export async function verfiyUser(): Promise<boolean> {
  const token: string | null = getToken();

  if (!token) return false;

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };

  try {
    const res = await fetch(`${backendURL}user/validate`, options).then(res =>
      res.json()
    );

    if (res.statusCode && res.statusCode === 401) {
      signOut();
      return false;
    }
  } catch (error) {
    signOut();
    return false;
  }

  return true;
}

export function persistLogin(token: string): void {
  localStorage.setItem(lsKey, token);
}

export function signIn(provider = 'google') {
  localStorage.removeItem(lsKey);

  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=500,left=100,top=100`;

  window.open(`${backendURL}auth/${provider}`, 'timos-login', params);

  window.onmessage = async (e: MessageEvent) => {
    if (e.data && String(e.data).startsWith('tlt=')) {
      if (
        [
          'http://localhost:3000',
          'https://api.timos.design',
          'https://api.timos.design:3002',
        ].includes(e.origin)
      ) {
        const token = String(e.data).substring(4);
        persistLogin(token);

        if (!store.getters.valid && (await verfiyUser())) {
          store.commit('signIn', getUserFromJWT());
          router.push({ name: 'home' });
        }
      } else {
        console.error('Unallowed origin', e.origin);
      }
    }
  };
}
