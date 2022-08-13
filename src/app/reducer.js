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
        case "SHOW_MENU":
            return {
                ...state,
                floatMenu: action.payload
            }
        case "ACTIVE_MENU":
            return {
                ...state,
                mainMenu: !state.mainMenu
            }
        case "SHOW_MENU_DESKTOP":
            return {
                ...state,
                menuDesktop: action.payload
            }
        default:
            return state;
    }
}