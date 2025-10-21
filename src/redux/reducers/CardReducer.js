import { ActionTypes } from "../constants/action-types";

const initialState = {
    cartItemNumbers: 0,
    items: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CART_ITEMS_NUMBERS:
            return {
                ...state
            }
        case ActionTypes.ADD_TO_CART: {

            const items = state.items;
            let isExists = false;
            items.map((item, idx) => {
                if (item.id === payload.id) {
                    items[idx].quantity += 1;
                    isExists = true;
                }
            });
            if (!isExists) {
                items.push({
                    ...payload,
                    quantity: 1
                });
            }

            return {
                ...state,
                cartItemNumbers: state.cartItemNumbers + 1
            }
        }
        case ActionTypes.DECREASE_QUANTITY: {

            const items = state.items;
            let idxExisting = -1;

            items.map((item, idx) => {
                if (item.id === payload.id) {
                    items[idx].quantity -= 1;
                    idxExisting = idx;
                }
            });
            if (idxExisting !== -1 && items[idxExisting].quantity === 0) {
                items.splice(idxExisting, 1);
            }

            return {
                ...state,
                cartItemNumbers: (idxExisting === -1) ? state.cartItemNumbers : state.cartItemNumbers -1
            }
        }
        case ActionTypes.DELETE_FROM_CART: {
            const items = state.items;
            const idxExisting = items.findIndex(i => i.id === payload.id);

            if (idxExisting !== -1) {
                const quantityRemoved = items[idxExisting].quantity;
                items.splice(idxExisting, 1);

                return {
                    ...state,
                    cartItemNumbers: state.cartItemNumbers - quantityRemoved
                }
            }

            return state;
        }
        case ActionTypes.EMPTY_CART: {
            return {
                ...initialState
            }
        }
        default:
            return state;
    }
}