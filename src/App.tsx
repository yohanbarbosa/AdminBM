import { Routes,Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import CreateSaas from './pages/createSaas'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    
     <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/createSaas' element={<CreateSaas/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
    
  )
}

export default App
