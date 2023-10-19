import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={localStorage.getItem("token") ? <div>메인페이지</div> : <Navigate to="/login" /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        
      </Routes>
    </div>
  );
}
export default App;