
import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import Store from './Store/configureStore'
import { persistStore } from 'redux-persist'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends React.Component {
  render() {
    let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    )
  }
}