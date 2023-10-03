
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Questionform } from './compnents';
import { Quiz } from './pages/quiz/quiz';
import { routerLinks } from './router/router';

function App() {
  return <>
  
    <Questionform/>
    <Routes>
      <Route path={routerLinks.QUIZ} element={<Quiz/>}/>
    </Routes>
  </>
}

export default App;
