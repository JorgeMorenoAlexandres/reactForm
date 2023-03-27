import { useState } from "react";
import FormControlado from "./components/FormControlado";
import Formulario from './components/Formulario';
import Todos from './components/Todo';


const initialStateTodos = [
  {
    id:1,
    title: 'Todo #01',
    description: 'Description #01',
    state: true,
    priority: true
  },
  {
    id:2,
    title: 'Todo #02',
    description: 'Description #02',
    state: false,
    priority: false
  },
  {
    id:3,
    title: 'Todo #02',
    description: 'Description #02',
    state: true,
    priority: false
  }
]

const App = () => {
  const [todos, SetTodos] = useState(initialStateTodos)
  return (
    <div className="container ">
      {/* <FormControlado/> */}
      <FormControlado/>
      <Todos todos = {todos}/>
    </div>
  )
}

export default App
