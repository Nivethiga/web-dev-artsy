import React from 'react'
import Navbar from './Layout/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';

import Cart from './Pages/Cart';
import Login from './Pages/Login';

import Homedecor from './Pages/Homedecor';
import Artwork from './Pages/Artwork';
import Accessories from './Pages/Accessories';
import Navbar2 from './Layout/Navbar2';
import ContactUs from './Pages/ContactUs';
import SignUp from './Pages/SignUp';
import Hd1sp from './Subpage/Hd1sp';
import Hd2sp from './Subpage/Hd2sp';
import A1sp from './Subpage/A1sp';
import A2sp from './Subpage/A2sp';
import A7sp from './Subpage/A7sp';
import Aw1sp from './Subpage/Aw1sp';
import Aw2sp from './Subpage/Aw2sp';
import Buy from './Buynow/Buy';
import Gpay from './Buynow/Gpay';
import Phonepay from './Buynow/Phonepay';
import Succes from './Buynow/Succes';

const App = () => {
  return (
    <div>
   
    <BrowserRouter>
    <Navbar/>
    <Navbar2/>
    
    
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/homedecor' element={<Homedecor/>}/>
    <Route path='/artwork' element={<Artwork/>}/>
    <Route path='/accessories' element={<Accessories/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/signin' element={<SignUp/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/hd1sp' element={<Hd1sp/>}/>
    <Route path='/hd2sp' element={<Hd2sp/>}/>
    <Route path='/A1sp' element={<A1sp/>}/>
    <Route path='/A2sp' element={<A2sp/>}/>
    <Route path='/A7sp' element={<A7sp/>}/>
    <Route path='/Aw1sp' element={<Aw1sp/>}/>
    <Route path='/Aw2sp' element={<Aw2sp/>}/>
    <Route path='/buy' element={<Buy/>}/>
    <Route path='/gpay' element={<Gpay/>}/>
    <Route path='/phnp' element={<Phonepay/>}/>
    <Route path='/success' element={<Succes/>}/>
     



    </Routes>
    
    
    </BrowserRouter>
    </div>
  )
}

export default App