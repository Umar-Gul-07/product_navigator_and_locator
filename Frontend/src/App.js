import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Base from "./Pages/Base";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProductList from "./Pages/ProductList";
import Branches from "./Pages/Branches";
import Contact from "./Pages/Contact";
 


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
                    <Route path='*' element={<PageNotFound404/>}/>

                     
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
