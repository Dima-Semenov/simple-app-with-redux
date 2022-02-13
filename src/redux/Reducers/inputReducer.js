import { INPUT_TEXT } from "../types";

const initialState = {
  text: '',
}

export const inputReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: payload.text,
      }
    default: 
      return state;
  }
}
