
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route,RouterProvider,createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AdminRoute from './pages/admin/AdminRoute.jsx'
import Profile from './pages/user/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
     <Route path='login' element ={<Login/>}/>
     <Route path='register' element ={<Register/>}/>

    <Route path='' element ={<PrivateRoute/>}>
      <Route path='/profile' element ={<Profile/>}/>
    </Route>
    <Route path="/admin" element={<AdminRoute />}></Route>
  </Route>
  
  
)
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
)
