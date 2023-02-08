import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore';
import store from './Stor';

// const persistdStore = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistdStore = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistdStore}>
      <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
