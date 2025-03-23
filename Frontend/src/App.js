import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductList from "./Pages/ProductList";
import Branches from "./Pages/Branches";
import Contact from "./Pages/Contact";
import ShoppingList from "./Pages/ShoppingList";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Protected from "./Security/Protected";
import StoreMap from "./Pages/include/StoreMap";
 


function App() {
    return (
        <>
            <BrowserRouter>

                {/* ToastContainer */}
                <ToastContainers/>

                {/* Routes */}
                <Routes>

                    {/* Web Routes */}
                    <Route path='/' element={<Base><Home/></Base>}/>
                    <Route path='/product-list' element={<Base><ProductList/></Base>}/>
                    <Route path='/branches' element={<Base><Branches/></Base>}/>
                    <Route path='/about' element={<Base><About/></Base>}/>
                    <Route path='/contact' element={<Base><Contact/></Base>}/>
                    {/* <Route path='/shopping-list' element={<Base><Protected><ShoppingList/></Protected></Base>}/> */}
                    <Route path='/shopping-list' element={<Base><ShoppingList/></Base>}/>
                    <Route path="/store-map" element={<StoreMap />} />


                    <Route path='/login' element={<Base><Login/></Base>}/>
                    <Route path='/registration' element={<Base><Registration/></Base>}/>
                    <Route path='*' element={<PageNotFound404/>}/>

                     
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
