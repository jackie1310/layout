import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
      </Routes>
    </>
  );
}

export default App;
