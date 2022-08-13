export const addFavorites = (payload) => ({
    type: 'ADD_FAVORITES',
    payload
});

export const removeFavorites = (payload) => ({
    type: 'REMOVE_FAVORITES',
    payload
});

export const activeMenu = () => ({
    type: "ACTIVE_MENU",
});

export const showMenu = (payload) => ({
    type: "SHOW_MENU",
    payload
});
export const showMenuDesktop = (payload) => ({
    type: "SHOW_MENU_DESKTOP",
    payload
});