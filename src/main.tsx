import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 
import './index.css' 
import Proflie from './components/proflie.tsx'
//import TodoList from './components/TodoList.tsx'
// import Course from './components/Course.tsx'
// import { Assignment } from './components/Assignment.tsx'


createRoot(document.getElementById('root')!).render( 
  <StrictMode>  
    {/* <TodoList /> */}
    {/*<Assignment/>*/}
    {/* <Course/> */}
    <Proflie />
  </StrictMode>, 
)
