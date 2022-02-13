import { connect } from 'react-redux';
import { onDecrementLikes, onIncrementLikes } from '../redux/action';
import { bindActionCreators } from 'redux';
import { getLikes } from '../redux/selector';

export const Likes = (props) => {

  return (
    <div className="button-controls">
      <button onClick={props.actions.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.actions.onDecrementLikes}>Dislike</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    likes: getLikes(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ onIncrementLikes, onDecrementLikes}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
