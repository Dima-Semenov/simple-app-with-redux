import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, errorOn } from "../redux/action";
import { SingleComment } from "./SingleComment"
import uniqid from 'uniqid';
import { getComments } from "../redux/selector";

export const Comments = () => {
  const [textComment, setTextComment] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector(getComments);

  const changeTextComment = (e) => {
    const { value } = e.target;
    setTextComment(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();

    if (textComment.trim().length) {
      dispatch(commentCreate(textComment.trim(), id))
      setTextComment('')
    } else {
      dispatch(errorOn("Please enter text"))
    }
  }

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type='text'
          value={textComment}
          onChange={changeTextComment}
          placeholder={'Type the text and press Enter'}
        />
        <input type='submit' hidden />
      </form>
      {
        comments.length ? (
          <div className="card-comments-block">
            {
              comments.map(item => (
                <SingleComment key={item.id} data={item} />
              ))
            }
          </div>
        ) : (
          <div className="card-noComments">
            <p>No comments</p>
          </div>
        )
      }
    </div>
  )
}
