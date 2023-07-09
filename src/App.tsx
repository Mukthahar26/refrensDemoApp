import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigators from './navigations/rootNavigators';
import {
  UrlListContext,
  urlListStateInit,
  urlListStateInitProps,
  urlListReducer,
} from './contextAPIs/urlsContext';

const App = () => {
  const [state, dispatch] = useReducer(
    urlListReducer,
    urlListStateInit as urlListStateInitProps,
  );
  return (
    <UrlListContext.Provider value={{state, dispatch}}>
      <NavigationContainer>
        <RootNavigators />
      </NavigationContainer>
    </UrlListContext.Provider>
  );
};

export default App;
