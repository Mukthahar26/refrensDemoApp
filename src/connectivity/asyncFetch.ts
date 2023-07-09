import logger from '../utils/logger';

const getRequest = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const getFetch = async (
  url: string | undefined,
  request = getRequest,
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
