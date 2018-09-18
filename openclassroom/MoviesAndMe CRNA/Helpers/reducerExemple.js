function reducerProfile(state, action) {
    let nextState

    // Une action est un objet avec un type et une valeure

    switch (action.type) {
        case 'ADD_PROFIL':
        nextState = {
            ...state,
            profil: action.value
        }
            return nextState
        case 'UPDATE_PROFIL':
            return nextState
        case 'DELETE_PROFIL':
            return nextState
        default:
        return nextState
    }
}