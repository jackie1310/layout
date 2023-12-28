import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import CreateAccount from './components/CreateAccount/CreateAccount';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={CreateAccount}/>
      </Routes>
    </>
  );
}

export default App;
