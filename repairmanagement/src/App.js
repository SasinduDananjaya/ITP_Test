import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register, Error, Landing, ProtectedRoute } from './pages'
import { AddRepair, AllRepairs, Profile, SharedLayout, Stats } from './pages/dashboard/repair/index.js'

function App() {
  return (

  <BrowserRouter>


    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
            <SharedLayout/>
        </ProtectedRoute>
      
      }>
        <Route index element={<Stats/>}/>
        <Route path="all-repairs" element={<AllRepairs/>}/>
        <Route path="add-repair" element={<AddRepair/>}/>
        <Route path="profile" element={<Profile/>}/>
        
      </Route>

      <Route path="/register" element={<Register/>} />
      <Route path="/Landing" element={<Landing/>} />
      <Route path="*" element={<Error/>} />
    </Routes>

  </BrowserRouter>

  )
}

export default App;
