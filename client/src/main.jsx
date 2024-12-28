
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
import CategoryList from './pages/admin/CategoryList.jsx'
import UserList from './pages/admin/UserList.jsx'
import ProductList from './pages/admin/ProductList.jsx'
import AdminProductUpdate from './pages/admin/ProductUpdate.jsx'
import AllProducts from './pages/admin/AllProducts.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
     <Route path='login' element ={<Login/>}/>
     <Route path='register' element ={<Register/>}/>

    <Route path='' element ={<PrivateRoute/>}>
      <Route path='/profile' element ={<Profile/>}/>
    </Route>
    <Route path="/admin" element={<AdminRoute />}>
    <Route path='userlist' element = {<UserList/>}/>
    <Route path='categorylist' element = {<CategoryList/>}/>
    <Route path='productlist' element = {<ProductList/>}/>
    <Route path='allproductslist' element ={<AllProducts/>}/>
    <Route path='product/update/:_id' element = {<AdminProductUpdate/>}/>
    </Route>
  </Route>
  
  
)
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
)
