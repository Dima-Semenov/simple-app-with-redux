import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Comments } from './components/Comments';
import Likes from './components/Likes';
import { Spin } from './components/Spin';
import Title from './components/Title';
import { comentsLoading } from './redux/action';
import { getError, getLoader } from './redux/selector';

function App() {
  const isLoaderVisible = useSelector(getLoader);
  const isErrorVisible = useSelector(getError)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comentsLoading())
  }, [dispatch])

  const isError = () => {
    if (isErrorVisible) {
      return (
        <div className='error-message'>
          <p>{isErrorVisible}</p>
        </div>
      )
    }
  }

  return (
    <div className="App">
      {isError()}
      {
        isLoaderVisible ? (
          <Spin isLoaderVisible={isLoaderVisible} />
        ) : (
          <div className="wrap">
            <div className="card">
              <div className="card-image">
                <img src="./sea.jpg" alt="surfing"/>
                <Title />
                <Likes />
              </div>
              <Comments />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
