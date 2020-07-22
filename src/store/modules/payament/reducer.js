import produce from 'immer';

const INITIAL_STATE = {
    status: {
        loading: false;
    },
    error: {
        status: false,
        message: '',
        reasons: []
    }
}

export default function payament(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch(action.type) {
            case '@payament/SEND_CREDIT_CARD_PAYAMENT_REQUEST':
                draft.status.loading = true;
                draft.error = INITIAL_STATE.error;
                break;

            case '@payament/SEND_CREDIT_CARD_PAYAMENT_SUCCESS':
                draft.status.loading = false;
                break;

            case '@payament/SEND_BILLET_PAYAMENT_REQUEST':
                draft.status.loading = true;
                draft.error = INITIAL_STATE.error;
                break;

            case '@payament/SEND_BILLET_PAYAMENT_SUCCESS':
                draft.status.loading = false;
                break; 

            case '@payament/PAYAMENT_FAILURE':
                const { message, reasons } = action.payload;
                draft.status.loading = false;
                draft.error.status = false;
                draft.error.message = message;
                draft.error.reasons = reasons;
                break;
            default:
        }
    })
}