import { AsyncStorage, Platform } from 'react-native'
import { createStore, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducer from './reducers'

export default (onComplete) => {
  const enhancer = compose(
    // autoRehydrate(),
    devTools({
      host: 'localhost', port: 5678,
      name: 'BinPick ' + Platform.OS, realtime: true,
    }),
  );

  const store = createStore(reducer, undefined, enhancer)
  persistStore(store, { storage: AsyncStorage }, onComplete)

  return store
}
