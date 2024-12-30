
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
import Home from './pages/Home.jsx'
import Favorites from './pages/products/Favorites.jsx'
import ProductDetails from './pages/products/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import Shop from './pages/Shop.jsx'
import Shiping from './pages/orders/Shiping.jsx'
import PlaceOrder from './pages/orders/PlaceOrder.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Order from './pages/orders/Order.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import OrderList from './pages/admin/OrderList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
     <Route path='/login' element ={<Login/>}/>
     <Route path='/register' element ={<Register/>}/>
     <Route index={true} path='/' element ={<Home/>}/>
     <Route path='/favorite' element ={<Favorites/>}/>
     <Route path='/product/:id' element ={<ProductDetails/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/shop' element={<Shop/>}/>


    <Route path='' element ={<PrivateRoute/>}>
      <Route path='/profile' element ={<Profile/>}/>
      <Route path='/shiping' element ={<Shiping/>}/>
      <Route path='/placeorder' element ={<PlaceOrder/>}/>
      <Route path='/order/:id' element ={<Order/>}/>
    </Route>
    <Route path="/admin" element={<AdminRoute />}>
    <Route path='userlist' element = {<UserList/>}/>
    <Route path='categorylist' element = {<CategoryList/>}/>
    <Route path='productlist' element = {<ProductList/>}/>
    <Route path='allproductslist' element ={<AllProducts/>}/>
    <Route path="productlist/:pageNumber" element={<ProductList />} />
    <Route path='product/update/:_id' element = {<AdminProductUpdate/>}/>
    <Route path="orderlist" element={<OrderList />} />
    <Route path='dashboard' element={<AdminDashboard/>}/>
    </Route>
  </Route>
  
  
)
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PayPalScriptProvider>

    <RouterProvider router={router}/>
    </PayPalScriptProvider>
  </Provider>
)
