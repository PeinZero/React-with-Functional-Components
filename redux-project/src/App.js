import { Fragment } from 'react';
import {useSelector} from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  const isAuth = useSelector(state => state.authentication.isAuth);

  return (
    <Fragment>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
    
  );
}

export default App;
