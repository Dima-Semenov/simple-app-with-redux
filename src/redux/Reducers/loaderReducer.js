import {
  ERROR_OFF,
  ERROR_ON,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON
} from "../types";

const initialState = {
  loading: true,
  error: null,
}

export const loaderReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      }
    case LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      }
    case ERROR_ON:
      return {
        ...state,
        error: payload.text,
      }
    case ERROR_OFF:
      return {
        ...state,
        error: null,
      }
    default:
      return state;
  }
};