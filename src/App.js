import './App.css'
import PlanLayout from './pages/Layouts/PlanLayout'
import Welcome from './pages/Welcome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation'
import CodeConfirm from './pages/CodeConfirm'
import AllowNotification from './pages/AllowNotification'
import AppLayout from './pages/Layouts/AppLayout'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/invite' element={<PhoneConfirmation />} />
          <Route path='/code_confirm' element={<CodeConfirm />} />
          <Route path='/allow_notification' element={<AllowNotification />} />
          <Route
            path='/home'
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  )
}
export default App
