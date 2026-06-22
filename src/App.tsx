import { Routes,Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import CreateSaas from './pages/createSaas'

function App() {


  return (
    
     <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/createSaas' element={<CreateSaas/>}/>
     </Routes>
    
  )
}

export default App
