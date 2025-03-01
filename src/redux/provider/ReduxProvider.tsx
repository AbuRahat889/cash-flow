// src/ReduxProvider.tsx
'use client';

import React from 'react';
import { persistor, store } from '../store/store'; // Import the store you have created
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
      {children}
    </PersistGate>
    {/* {children} */}

  </Provider>;
};

export default ReduxProvider;
