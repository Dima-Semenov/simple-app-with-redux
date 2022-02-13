import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentUpdate, deleteComment, errorOn } from "../redux/action";


export const SingleComment = (props) => {
  const { text, id } = props.data;
  const [commentText, setCommentText] = useState(text);
  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    const { value } = e.target;
    setCommentText(value);
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = () => {
    dispatch(deleteComment(id))
  }

  const handleBlur = () => {
    if (text !== commentText) {
      dispatch(errorOn("Please press Enter to save changes"))
      setCommentText(text)
    }
  }

  return (
   <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">&times;</div>
      <input
        type='text'
        value={commentText}
        onChange={handleChangeText}
        onBlur={handleBlur}
      />
      <input type='submit' hidden />
   </form>
  )
}