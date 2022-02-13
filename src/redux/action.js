import { 
  COMMENT_CREATE,
  COMMENT_UPDATE,
  DECREMENT,
  DELETE_COMMENT,
  ERROR_OFF,
  ERROR_ON,
  INCREMENT,
  INPUT_TEXT,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  LOADING_COMMENTS
} from "./types"

export const onIncrementLikes = () => {
  return {
    type: INCREMENT,
  }
}

export const onDecrementLikes = () => {
  return {
    type: DECREMENT,
  }
}

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    payload: { text },
  }
}

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    payload: { text, id },
  }
}

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    payload: { text, id },
  }
}

export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    payload: { id },
  }
}

export const loaderOff = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}

export const loaderOn = () => {
  return {
    type: LOADER_DISPLAY_ON,
  }
}

export const errorOn = (text) => {
  return dispatch => {
    dispatch({
      type: ERROR_ON,
      payload: { text },
    })

    setTimeout(() => {
      dispatch(errorOff())
    }, 3000)
  }
}

export const errorOff = () => {
  return {
    type: ERROR_OFF,
  }
}

export const comentsLoading = () => {
  return async dispatch => {
    try {
      dispatch(loaderOn())
      const data = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
      const jsonData = await data.json();
      
      dispatch({
        type: LOADING_COMMENTS,
        payload: {
          data: jsonData,
        }
      })
      dispatch(loaderOff())
  
    } catch(error) {
      dispatch(errorOn('Ошибка API'))
    }
  }
}
