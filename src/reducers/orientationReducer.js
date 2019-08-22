import { TOGGLE_ORIENTATION } from "../actions/orientationAction";

const initialState = { row: true };

export default function orientation(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_ORIENTATION:
            return { ...state, row: !state.row };
        default:
            return state;
    }
}