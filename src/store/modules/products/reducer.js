import produce from 'immer';
import _ from "lodash";

const INITIAL_STATE = {
    products: [],
    page: 0,
    status = {
        loading: false,
    },
    error: {
        status: false,
        message: '',
        reasons: []
    }
}

export default function products(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch(action.type) {
            case '@products/INDEX_PRODUCTS_REQUEST':
                draft.status.loading = true;
                draft.error = INITIAL_STATE.error;
                break;

            case '@products/INDEX_PRODUCTS_SUCCESS':
                const unionIndex = _.unionBy(action.payload.body, state.products, 'id'); 
                draft.status.loading = false;
                draft.products = _.orderBy(unionIndex, ['name, category'], ['asc', 'asc'])
                draft.page = state.page + 1;
                break;

            case '@products/PRODUCTS_FAILURE':
                const { message, reasons } = action.payload;
                draft.status.loading = false;
                draft.error.status = true;
                draft.error.message = message;
                draft.error.reasons = reasons;
                break;

            case '@products/RESET_PAGE':
                draft.page = 0;
                break;

            case '@products/RESET_PRODUCTS':
                draft.products = [];    
                break;

            default:
        }
    })
}