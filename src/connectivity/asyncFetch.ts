import logger from '../utils/logger';

const getRequest = () => {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

const postRequest = (params: any) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };
};

export const getFetch = async (
  url: string | undefined,
  request = getRequest(),
) => {
  try {
    const response = await fetch(url as string, request);
    const json = await response.json();
    logger.log('getFetchgetFetch :', json);
    if (json) return json;
  } catch (e) {
    return e;
  }
};

export const postFetch = async (url: string, params: any) => {
  try {
    const response = await fetch(url, postRequest(params));
    const json = await response.json();
    if (json) return json;
  } catch (e) {
    return e;
  }
};
