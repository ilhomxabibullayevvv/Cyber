import { createStore, combineReducers } from 'redux';

const initialProductsState = {
    products: [],
};

const initialCartState = {
    cart: [],
};

const initialFavoritesState = {
    favorites: [],
};

const productReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

const favoriteReducer = (state = initialFavoritesState, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const productIndex = state.favorites.findIndex(item => item.id === action.payload.id);
            if (productIndex === -1) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload],
                };
            } else {
                return {
                    ...state,
                    favorites: state.favorites.filter(item => item.id !== action.payload.id),
                };
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
});

const store = createStore(rootReducer);

export default store;
