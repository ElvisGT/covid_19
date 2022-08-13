export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case "REMOVE_FAVORITES":
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== action.payload)
            }
        default:
            return state;
    }
}