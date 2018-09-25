// Store/configureStore.js

import { createStore } from 'redux'
import setAvatar from './Reducers/avatarReducer'
import toggleFavorite from './Reducers/favoriteReducer'
import toggleWatched from './Reducers/watchedReducer'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage
}

export default createStore(persistCombineReducers(rootPersistConfig, {setAvatar, toggleFavorite, toggleWatched}))
