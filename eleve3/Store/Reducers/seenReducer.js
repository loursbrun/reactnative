// Store/Reducers/seenReducer.js

const initialState = { filmsSeenAlready: [] }

function hasBeenAlreadySeen(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SEEN_OR_NOT':
    const filmsSeenAlreadyIndex = state.filmsSeenAlready.findIndex(item => item.id === action.value.id)

    if (filmsSeenAlreadyIndex === -1) {
      nextState = {
        ...state,
        filmsSeenAlready: [...state.filmsSeenAlready, action.value]
      }

    } else {
    nextState = {
      ...state,  
      filmsSeenAlready: state.filmsSeenAlready.filter( item => item.id !== action.value.id)
    }

  }
  return nextState || state
  
    default:
      return state
  }
}

export default hasBeenAlreadySeen