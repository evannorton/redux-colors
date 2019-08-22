import { CHANGE_COLORS } from "../actions/colorAction";
import getRandomColor from "../getRandomColor";
import amount from "../amount";

const getColors = () => {
    const colors = new Array(amount).fill(0);
    colors.forEach((color, key) => {
        colors[key] = getRandomColor();
    });
    return colors;
}

const initialState = { colors: getColors() };

export default function color(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLORS:
            return { ...state, colors: getColors() };
        default:
            return state;
    }
}