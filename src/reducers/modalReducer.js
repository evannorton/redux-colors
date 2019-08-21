import { mergeRight } from 'ramda';
import { SHOW_MODAL } from '../actions/modalAction';

const initialState = { display: false };

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return mergeRight(state, { display: true});
    default:
      return state;
  }
}
