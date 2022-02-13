import { COMMENT_CREATE, COMMENT_UPDATE, DELETE_COMMENT, LOADING_COMMENTS } from "../types";

const initialState = {
  comments: [],
}

export const commentsReducer = (state = initialState, { type, payload}) => {
  switch(type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, payload]
      }
    case COMMENT_UPDATE:
      return {
        ...state,
        comments: [...state.comments].map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              text: payload.text,
            }
          }

          return item
        })
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: [...state.comments].filter(item => item.id !== payload.id)
      }
    case LOADING_COMMENTS:
      return {
        ...state,
        comments: payload.data.map(item => ({ id: item.id, text: item.name }))
      }

    default:
      return state;
  }
}