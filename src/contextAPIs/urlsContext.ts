import {createContext} from 'react';

export type urlListPayloadTypes = {
  characters?: string;
  locations?: string;
  episodes?: string;
};

export type urlListStateInitProps = {
  loading: boolean;
  status: string;
  payload?: urlListPayloadTypes | null;
};

export enum urlListActionTypeNames {
  REQUESTLOADING = 'REQUESTLOADING',
  REQUESTSUCCESS = 'REQUESTSUCCESS',
  REQUESTFAILED = 'REQUESTFAILED',
}

type actionType = {
  type:
    | urlListActionTypeNames.REQUESTLOADING
    | urlListActionTypeNames.REQUESTSUCCESS
    | urlListActionTypeNames.REQUESTFAILED;
  payload?: urlListPayloadTypes | null;
};

export type urlListContext = {
  state: urlListStateInitProps;
  dispatch: React.Dispatch<actionType>;
};

export const urlListStateInit: urlListStateInitProps = {
  loading: false,
  status: '',
  payload: {
    characters: '',
    locations: '',
    episodes: '',
  },
};

export const urlListReducer = (
  state: urlListStateInitProps,
  action: actionType,
): urlListStateInitProps => {
  switch (action.type) {
    case urlListActionTypeNames.REQUESTLOADING:
      return {
        loading: true,
        status: action.type,
        payload: null,
      };
    case urlListActionTypeNames.REQUESTSUCCESS:
      return {
        loading: false,
        status: action.type,
        payload: action.payload,
      };
    case urlListActionTypeNames.REQUESTFAILED:
      return {
        loading: false,
        status: action.type,
        payload: null,
      };
    default:
      return state;
  }
};
export const UrlListContext = createContext<urlListContext>({
  state: urlListStateInit,
  dispatch: () => {},
});
