import { CHANGE_COLORS } from "../actions/colorAction";
import getRandomColor from "../getRandomColor";

const initialState = { colors: ["red", "yellow", "blue", "green"] };

export default function color(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLORS:
            return { ...state, colors: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()] };
        default:
            return state;
    }
}