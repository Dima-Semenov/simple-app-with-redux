import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
import { inputReducer } from './inputReducer';
import { likesReducer } from './likesReducer';
import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
  likes: likesReducer,
  input: inputReducer,
  comments: commentsReducer,
  loader: loaderReducer,
});