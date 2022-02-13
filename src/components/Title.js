import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputText } from '../redux/action'
import { getInputText } from '../redux/selector';

const Title = (props) => {
  
  const changeText = (e) => {
    const { value } = e.target;
    props.action.inputText(value)
  }

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input
          type="text"
          onChange={changeText}
          value={props.text}
        />
      </div>
      <p>
        {props.text}
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text: getInputText(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators({ inputText }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
