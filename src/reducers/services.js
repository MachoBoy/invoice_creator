import * as types from '../actions/ActionTypes'

const initialState = [];

export default function services(state=initialState, action) {
    switch(action.type) {
        case types.CREATE:
            return [
                ...state,
                {
                    id: 1,
                    description: 'description',
                    tax: 'tax',
                    amount: 'action.amount'
                }
            ];
        default:
            return state;
    }
}
