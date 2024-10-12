import { API_BASE_URL } from './apiBaseUrl';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const request = async (
  method: string,
  url: string,
  payload?: any,
  customHeaders?: HeadersInit
) => {
  const headers = { ...defaultHeaders, ...customHeaders };
  let body: string | URLSearchParams | undefined;

  if (payload) {
    if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      body = new URLSearchParams(payload);
    } else {
      body = JSON.stringify(payload);
    }
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method,
      headers,
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        data: data,
      };
    }

    return data;
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
};

const get = (url: string, customHeaders?: HeadersInit) =>
  request('GET', url, undefined, customHeaders);

const post = (url: string, payload: any, customHeaders?: HeadersInit) =>
  request('POST', url, payload, customHeaders);

const patch = (url: string, payload: any, customHeaders?: HeadersInit) =>
  request('PATCH', url, payload, customHeaders);

const del = (url: string, customHeaders?: HeadersInit) =>
  request('DELETE', url, undefined, customHeaders);

export { get, post, patch, del };
