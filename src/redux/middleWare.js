import { errorOn } from "./action"
import { COMMENT_CREATE } from "./types"

const badWords = ["Дурак", "Мудак", "Козел"]

export const spanFilter = (store) => {
  return next => {
    return action => {
       if (action.type === COMMENT_CREATE) {
         const hadBadWords = badWords.some(item => action.payload.text.toLocaleLowerCase().includes(item.toLocaleLowerCase()))
         if (hadBadWords) {
           return store.dispatch(errorOn("Use polite words"));
         }
       }

       return next(action)
    }
  }
}